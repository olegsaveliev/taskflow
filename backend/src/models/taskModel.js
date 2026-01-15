import pool from '../config/db.js';

export const taskModel = {
  async findAllByUser(userId, status = 'all') {
    let query = 'SELECT * FROM tasks WHERE user_id = $1';
    const params = [userId];

    if (status !== 'all') {
      query += ' AND status = $2';
      params.push(status);
    }

    query += ' ORDER BY created_at DESC';
    const result = await pool.query(query, params);
    return result.rows;
  },

  async findById(id, userId) {
    const result = await pool.query(
      'SELECT * FROM tasks WHERE id = $1 AND user_id = $2',
      [id, userId]
    );
    return result.rows[0];
  },

  async create(userId, title, description, priority, dueDate) {
    const result = await pool.query(
      `INSERT INTO tasks (user_id, title, description, priority, due_date) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [userId, title, description || null, priority || 'medium', dueDate || null]
    );
    return result.rows[0];
  },

  async update(id, userId, updates) {
    const { title, description, status, priority, due_date } = updates;
    const result = await pool.query(
      `UPDATE tasks 
       SET title = COALESCE($3, title),
           description = COALESCE($4, description),
           status = COALESCE($5, status),
           priority = COALESCE($6, priority),
           due_date = COALESCE($7, due_date),
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $1 AND user_id = $2
       RETURNING *`,
      [id, userId, title, description, status, priority, due_date]
    );
    return result.rows[0];
  },

  async delete(id, userId) {
    const result = await pool.query(
      'DELETE FROM tasks WHERE id = $1 AND user_id = $2 RETURNING id',
      [id, userId]
    );
    return result.rows[0];
  },

  async toggleStatus(id, userId) {
    const result = await pool.query(
      `UPDATE tasks 
       SET status = CASE WHEN status = 'pending' THEN 'completed' ELSE 'pending' END,
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $1 AND user_id = $2
       RETURNING id, status, updated_at`,
      [id, userId]
    );
    return result.rows[0];
  }
};
