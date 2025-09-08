
import { pool } from '../db.js'

export default class Cupos {
    static async getCuposByMovilNumber(movilNumber) {
    const [rows] = await pool.query('SELECT * FROM cupos WHERE numero_movil = ?', [movilNumber]);
    return rows[0];
  }
}
