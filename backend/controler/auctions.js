const config = require('../config/confiq')
const sql = require('mssql');
const { response } = require('express');

const createAuction = async(req,res)=>{
try{
        const {title,category,photos,brand,price,phoneNumber,paymentMethod, description,Owner} = req.body;
    console.log(req.body);
    let pool = await sql.connect(config);
    let createdAuction = await pool.request()
    .input('title',sql.VarChar,title)
    .input('category',sql.VarChar,category)
    .input('photos',sql.NVarChar,photos)
    .input('brand',sql.VarChar,brand)
    .input('price',sql.VarChar,price)
    .input('phoneNumber',sql.VarChar,phoneNumber)
    .input('paymentMethod',sql.VarChar,paymentMethod)
    .input('description',sql.VarChar,description)
    .input('Owner',sql.VarChar,Owner)
    .query('INSERT INTO auctions (title,category,photos,brand,price,phoneNumber,paymentMethod,description,Owner) VALUES (@title,@category,@photos,@brand,@price,@phoneNumber,@paymentMethod,@description,@Owner)')
    console.log(createdAuction);
    res.status(200).json({
        created:"successfully",
        data:createdAuction
    })
}catch(err){
res.status(404).json(err)
}
}



const getAuctions = async(req,res)=>{
    try{
let pool = await sql.connect(config)
let allAuctions = await pool
.request()
.query('SELECT * FROM auctions')
        res.status(200).json({
            status:'success',
            data:allAuctions.recordsets
        });
console.log(allAuctions);
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
const deleteAuction = async(req,res)=>{
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
deleteAuction,
}