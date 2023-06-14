module.exports = (sequelize,Sequelize)=>{
const Enterprise = sequelize.define('enterprise',{
name:{
    type:Sequelize.STRING,
    allowNull:false,
},
category:{
    type:Sequelize.STRING,
    allowNull:false
},
location:{
    type:Sequelize.STRING,
    allowNull:false
},
owner:{
    type:Sequelize.STRING,
    allowNull:false
}
});
return Enterprise
}