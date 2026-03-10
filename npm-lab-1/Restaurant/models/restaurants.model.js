const { poolPromise, sql } = require("../db/mssql");

async function getAll() {
  const pool = await poolPromise;
  const result = await pool.request()
    .query("SELECT * FROM restaurants");
  return result.recordset;
}

async function getByID(id) {
  const pool = await poolPromise;
  const result = await pool.request()
    .input("id", sql.Int, id)
    .query("SELECT * FROM restaurants WHERE RestaurantID = @id");
  return result.recordset;
}

module.exports = { getAll, getByID };
