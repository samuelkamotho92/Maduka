var confiq = {
    server:'DESKTOP-KE6NN2R',
    database:'Maduka',
    // host:"localhost",
    user:'sa',
    password:'12345678',
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
      }
  //     dialect: "mssql",
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
      
}
module.exports = confiq;