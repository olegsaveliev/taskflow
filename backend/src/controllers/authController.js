import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userModel } from '../models/userModel.js';

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const setTokenCookie = (res, token) => {
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });
};

export const authController = {
  async register(req, res, next) {
    try {
      const { email, password, name } = req.body;

      // Validation
      if (!email || !password || !name) {
        return res.status(400).json({
          success: false,
          error: { message: 'Email, password, and name are required', code: 'VALIDATION_ERROR' }
        });
      }

      if (password.length < 6) {
        return res.status(400).json({
          success: false,
          error: { message: 'Password must be at least 6 characters', code: 'VALIDATION_ERROR' }
        });
      }

      // Check if user exists
      const existingUser = await userModel.findByEmail(email);
      if (existingUser) {
        return res.status(409).json({
          success: false,
          error: { message: 'Email already registered', code: 'CONFLICT' }
        });
      }

      // Hash password and create user
      const passwordHash = await bcrypt.hash(password, 10);
      const user = await userModel.create(email, passwordHash, name);

      // Generate token and set cookie
      const token = generateToken(user.id);
      setTokenCookie(res, token);

      res.status(201).json({
        success: true,
        data: { user }
      });
    } catch (error) {
      next(error);
    }
  },

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          error: { message: 'Email and password are required', code: 'VALIDATION_ERROR' }
        });
      }

      const user = await userModel.findByEmail(email);
      if (!user) {
        return res.status(401).json({
          success: false,
          error: { message: 'Invalid credentials', code: 'UNAUTHORIZED' }
        });
      }

      const validPassword = await bcrypt.compare(password, user.password_hash);
      if (!validPassword) {
        return res.status(401).json({
          success: false,
          error: { message: 'Invalid credentials', code: 'UNAUTHORIZED' }
        });
      }

      const token = generateToken(user.id);
      setTokenCookie(res, token);

      res.json({
        success: true,
        data: {
          user: {
            id: user.id,
            email: user.email,
            name: user.name
          }
        }
      });
    } catch (error) {
      next(error);
    }
  },

  async logout(req, res) {
    res.clearCookie('token');
    res.json({
      success: true,
      data: { message: 'Logged out successfully' }
    });
  },

  async getMe(req, res) {
    res.json({
      success: true,
      data: { user: req.user }
    });
  }
};
