module.exports = (sequelize,Sequelize)=>{
const Auctions = sequelize.define('Auctions',{
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
}
});
return Auctions;
}





