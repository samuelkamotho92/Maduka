module.exports = (sequelize,Sequelize)=>{
const Auctions = sequelize.define('auctions',{
name:{
    type:Sequelize.STRING,
    allowNull:false,
},
description:{
    type:Sequelize.STRING,
    allowNull:false,
},
price:{
    type:Sequelize.INTEGER,
    allowNull:false
},
owner:{
    type:Sequelize.STRING,
    allowNull:false
}
});
return Auctions;
}





