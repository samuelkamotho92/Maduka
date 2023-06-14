// const dbConfig = require('../config/confiq');
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
//  host:dbConfig.host,
//  server:dbConfig.server,
//   dialect: dbConfig.dialect,
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle,
//   },
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.users = require("./user.js")(sequelize, Sequelize);
// db.auctions = require('./Auctions.js')(sequelize, Sequelize);
// db.enterprise = require('./Enterprise.js')(sequelize, Sequelize);

// module.exports = db;