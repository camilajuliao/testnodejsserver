
import { pool } from '../db.js'

export default class Cupos {
    static async getCuposByMovilNumber(movilNumber) {
            const [rows] = await pool.query(
                `SELECT 
                    c.id,
                    c.saldo,
                    c.numero_movil,
                    c.plataforma,
                    p.name as plataforma_nombre
                 FROM cupos c
                 INNER JOIN plataforma p ON c.plataforma = p.id
                 WHERE c.numero_movil = ?`,
                [movilNumber]
            );
    return rows[0];
  }
}
