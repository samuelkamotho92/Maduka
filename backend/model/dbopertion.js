const config = require('../config/confiq');
const sql = require("mssql");

const getData = async()=>{
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log("server not connected");
  }

}

const getDataWithQuery = async()=>{
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query('SELECT *  FROM users');
      return res.recordset;
    } catch (error) {
  console.log(" mathus-error :" + error);
    }
  }
  module.exports = {
    getData,
    getDataWithQuery
  }