const config = require('../config/confiq')
const sql = require('mssql')

const createAuction  = async(req,res)=>{
    const {name,description,price,owner} = req.body;
try{
const pool = await sql.connect(config);
let auction = await pool.request()
.input('name',sql.VarChar,name)
.input('description',sql.VarChar,description)
.input('price',sql.VarChar,price)
.input('owner',sql.VarChar,owner)
.query('INSERT INTO auctions (name,description,price,owner) VALUES (@name,@description,@price,@owner)')
res.status(200).json({
    status:'success',
    data:auction
})
}catch(err){
res.status(404).json(err)
}
}

const getAuctions = async(req,res)=>{
    try{
const pool = await sql.connect(config)
let allAuctions = await pool
.request()
.query('SELECT * FROM auctions')
        res.status(200).json({
            staus:'success',
            data:allAuctions
        });
    }catch(err){
res.status(404).json(err)
    }
}


const getOneAuction = async(req,res)=>{
    const id = req.params.id;
try{
    const pool = await sql.connect(config);
    let auction = await pool.request()
    .input('id',sql.Int,id)
    .query('SELECT * FROM auctions WHERE id = @id')
       !auction.recordset[0] ? res.status(404).json({ message: 'auction not found' }) :
       res.status(200).json({
        status:'success',
        auction: auction.recordset[0]
       });
}catch(err){
res.status(404).json(err)
}
}

const updateAuction = async(req,res)=>{
// const id = req.params.id;
// const updatedEnterprise =  await .update(req.body,{
//     where :{id:id}
// })
// res.status(200).json({
//     status:'success',
//     data:updatedEnterprise
// })
}
const deleteAuction = async()=>{
    const id = req.params.id;
    try{
    await sql.connect(config);
    await sql.query(`DELETE FROM auctions WHERE id = ${id}` )
    res.status(200).json({
        status:"success",
        message:"Auction deleted successfully"
    })
    }catch(err){
    res.status(400).json(err)
    }

}

module.exports = {
createAuction,
getAuctions,
getOneAuction,
deleteAuction
}