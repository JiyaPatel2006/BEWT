const sql = require("mssql");

const config = {
  user: "jiya\Jiyap",
  password: "",
  server: "localhost",       // or server IP
  database: "RESTAURANT_BACKEND",
//   options: {
//     // encrypt: true,           // for Azure
//     trustServerCertificate: true // for local SQL Server
//   }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch(err => console.log("Database Connection Failed!", err));

module.exports = {
  sql,
  poolPromise
};
