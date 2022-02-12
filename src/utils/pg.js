const { Pool } = require("pg");
const { Config } = require("../config/index");
const PG = new Config().PG();

const pool = new Pool({ connectionString: PG.connectionString });

class DB {
  async fetch(SQL, params) {
    const client = await pool.connect();
    try {
      const {
        rows: [row],
      } = await client.query(SQL, params);
      return row;
    } finally {
      client.release();
    }
  }

  async fetchAll(SQL, params) {
    const client = await pool.connect();
    try {
      const { rows } = await client.query(SQL, params);
      return rows;
    } finally {
      client.release();
    }
  }
}

module.exports = { DB };