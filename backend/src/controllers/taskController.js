import { taskModel } from '../models/taskModel.js';

export const taskController = {
  async getAll(req, res, next) {
    try {
      const status = req.query.status || 'all';
      const tasks = await taskModel.findAllByUser(req.user.id, status);
      
      res.json({
        success: true,
        data: { tasks, count: tasks.length }
      });
    } catch (error) {
      next(error);
    }
  },

  async getOne(req, res, next) {
    try {
      const task = await taskModel.findById(req.params.id, req.user.id);
      
      if (!task) {
        return res.status(404).json({
          success: false,
          error: { message: 'Task not found', code: 'NOT_FOUND' }
        });
      }

      res.json({ success: true, data: { task } });
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { title, description, priority, due_date } = req.body;

      if (!title || title.trim() === '') {
        return res.status(400).json({
          success: false,
          error: { message: 'Title is required', code: 'VALIDATION_ERROR' }
        });
      }

      // Validate priority if provided
      if (priority && !['low', 'medium', 'high'].includes(priority)) {
        return res.status(400).json({
          success: false,
          error: { message: 'Priority must be low, medium, or high', code: 'VALIDATION_ERROR' }
        });
      }

      const task = await taskModel.create(
        req.user.id,
        title.trim(),
        description,
        priority,
        due_date
      );

      res.status(201).json({ success: true, data: { task } });
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { title, description, status, priority, due_date } = req.body;

      // Verify task exists and belongs to user
      const existing = await taskModel.findById(req.params.id, req.user.id);
      if (!existing) {
        return res.status(404).json({
          success: false,
          error: { message: 'Task not found', code: 'NOT_FOUND' }
        });
      }

      if (status && !['pending', 'completed'].includes(status)) {
        return res.status(400).json({
          success: false,
          error: { message: 'Invalid status', code: 'VALIDATION_ERROR' }
        });
      }

      if (priority && !['low', 'medium', 'high'].includes(priority)) {
        return res.status(400).json({
          success: false,
          error: { message: 'Priority must be low, medium, or high', code: 'VALIDATION_ERROR' }
        });
      }

      const task = await taskModel.update(req.params.id, req.user.id, {
        title: title?.trim(),
        description,
        status,
        priority,
        due_date
      });

      res.json({ success: true, data: { task } });
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const deleted = await taskModel.delete(req.params.id, req.user.id);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          error: { message: 'Task not found', code: 'NOT_FOUND' }
        });
      }

      res.json({
        success: true,
        data: { message: 'Task deleted successfully' }
      });
    } catch (error) {
      next(error);
    }
  },

  async toggleStatus(req, res, next) {
    try {
      const task = await taskModel.toggleStatus(req.params.id, req.user.id);
      
      if (!task) {
        return res.status(404).json({
          success: false,
          error: { message: 'Task not found', code: 'NOT_FOUND' }
        });
      }

      res.json({ success: true, data: { task } });
    } catch (error) {
      next(error);
    }
  }
};
