
import { pool } from '../db.js'

export default class Cupos {
    static async getCuposByMovilNumber(movilNumber) {
    'SELECT * FROM cupos WHERE LOWER(movilNumber) = LOWER(?)', [movilNumber]
    return result;
  }
}
