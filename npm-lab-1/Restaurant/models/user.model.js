const { sql, poolPromise } = require("../db/mssql");

async function getAll() {
  const pool = await poolPromise;
  const result = await pool.request()
    .query("SELECT * FROM users");

  return result.recordset;
}

async function getByID(id) {
  const pool = await poolPromise;
  const result = await pool.request()
    .input("UserID", sql.Int, id)
    .query("SELECT * FROM users WHERE UserID = @UserID");

  return result.recordset;
}

async function getByUserName(UserName) {
  const pool = await poolPromise;
  const result = await pool.request()
    .input("UserName", sql.VarChar, UserName)
    .query("SELECT * FROM users WHERE UserName = @UserName");

  return result.recordset;
}

module.exports = { getAll, getByID, getByUserName };
