
import { pool } from '../db.js'

export default class User {
  
    static async getUserByName(name) {
    'SELECT * FROM users WHERE LOWER(name) = LOWER(?)', [name]
    return result;
  }

  static async getAllUsers() {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
  }

  static async getUserById(id) {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }
}

