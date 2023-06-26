const config = require('../config/confiq')
const sql = require('mssql')

const createEnterprise  = async(req,res)=>{
    const {name,category,location} = req.body;
    console.log(req.body);
try{
const pool = await sql.connect(config);
let enterprises = await pool.request()
.input('name',sql.VarChar,name)
.input('category',sql.VarChar,category)
.input('location',sql.VarChar,location)
.query('INSERT INTO enterprises (name,category,location) VALUES (@name,@category,@location)')
res.status(200).json({
    status:'success',
    data:enterprises
})
}catch(err){
res.status(404).json(err)
}
}

const getEnterprises = async(req,res)=>{
    try{
const pool = await sql.connect(config)
let allEnterprises = await pool
.request()
.query('SELECT * FROM enterprises')
        res.status(200).json({
            status:'success',
            data:allEnterprises
        });
    }catch(err){
res.status(404).json(err)
    }
}


const getOneEnterprise = async(req,res)=>{
    const id = req.params.id;
try{
    const pool = await sql.connect(config);
    let enterprise = await pool.request()
    .input('id',sql.Int,id)
    .query('SELECT * FROM enterprises WHERE id = @id')
    console.log(userOne.recordset[0])
       !enterprise.recordset[0] ? res.status(404).json({ message: 'enterprise not found' }) :
       res.status(200).json({
        status:'success',
  enterprise: enterprise.recordset[0]
       });
}catch(err){
res.status(404).json(err)
}
}

const updateEnterprise = async(req,res)=>{
const id = req.params.id;
const updatedEnterprise =  await enterprise.update(req.body,{
    where :{id:id}
})
res.status(200).json({
    status:'success',
    data:updatedEnterprise
})
}
const deleteEnterprise = async()=>{
    const id = req.params.id;
    try{
    await sql.connect(config);
    await sql.query(`DELETE FROM enterprises WHERE id = ${id}` )
    res.status(200).json({
        status:"success",
        message:"Enterprise deleted successfully"
    })
    }catch(err){
    res.status(400).json(err)
    }

}

module.exports = {
createEnterprise,
getEnterprises,
getOneEnterprise,
updateEnterprise,
deleteEnterprise
}