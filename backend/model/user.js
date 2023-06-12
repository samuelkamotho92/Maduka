const { SequelizeScopeError } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      firstName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false
      },
      password:{
        type: Sequelize.STRING,
        allowNull:false
      },
      isAdmin:{
        type:Sequelize.BOOLEAN ,
        defaultValue:false
      }
    });
    return Users;
  };