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

const getDataWithQuery = async(req,resp,next)=>{
    try {
      let pool = await sql.connect(config);
      console.log(pool)
      let res = await pool.request().query('SELECT *  FROM users');
      console.log(res.recordsets);
     resp.status(200).json({
      status:'success',
      data:res.recordsets
     })
    } catch (error) {
  console.log(" mathus-error :" + error);
    }
    next()
  }
  module.exports = {
    getData,
    getDataWithQuery
  }