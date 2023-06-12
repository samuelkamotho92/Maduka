module.exports = (sequelize,Sequelize)=>{
const Enterprise = sequelize.define('Enterprise',{
name:{
    type:Sequelize.STRING,
    allowNull:false,
},
category:{
    type:Sequelize.STRING,
    allowNull:false
}
});
return Enterprise
}