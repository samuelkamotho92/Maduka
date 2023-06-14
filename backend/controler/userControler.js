const config = require('../config/confiq');

const sql = require('mssql');
const createUser = async(req,res)=>{
    try{
const {firstName,lastName,phoneNumber,email,password} = req.body

let pool = await sql.connect(config);
let insertUser = await pool.request()
.input('firstName',sql.VarChar,firstName)
.input('lastName',sql.VarChar,lastName)
.input('phoneNumber',sql.VarChar,phoneNumber)
.input('email',sql.VarChar,email)
.input('password',sql.VarChar,password)
.query('INSERT INTO users (firstName,lastName,phoneNumber,email,password) VALUES (@firstName,@lastName,@phoneNumber,@email,@password)')

res.status(200).json({
    status:'success',
    data:insertUser
})
    }catch(err){
res.status(404).json(err)
    }

}

const getAllUsers = async(req,res)=>{
    try{
        let pool = await sql.connect(config);
        let users = await pool.request()
        .query('SELECT * FROM users')
        res.status(200).json({
         status:'success',
         data:users.recordsets
        })
    }catch(err){
res.status(404).json(err);
    }
}

const getOneUser = async(req,res)=>{
    const id = req.params.id;
    try{
       let pool = await sql.connect(config);
       let userOne = await pool.request()
       .input('id',sql.Int,id)
       .query('SELECT * from users WHERE id = @id')
       console.log(userOne.recordset[0])
       !userOne.recordset[0] ? res.status(404).json({ message: 'user not found' }) :
       res.status(200).json({
        status:'success',
        user: userOne.recordset[0]
       });

    }catch(err){
res.status(404).json({ message: err.message});
    }
}

//update user

const updateUser = async(req,res)=>{
    const id = req.params.id;
    try{
         const {firstName,lastName,phoneNumber,email,password}= req.body;
         let pool = await sql.connect(config);
      let updatedUser =   await pool.request()
         .input("id", sql.Int, id)
         .input('firstName',sql.VarChar,firstName)
         .input('lastName',sql.VarChar,lastName)
         .input('phoneNumber',sql.VarChar,phoneNumber)
         .input('email',sql.VarChar,email)
         .input('password',sql.VarChar,password)
         .query('UPDATE users SET firstName = @firstName, lastName = @lastName, phoneNumber = @phoneNumber, email = @email, password = @password WHERE id = @id')
     
         res.status(200),json({
            status:"success",
            message:'updated successfully',
            data:updatedUser
         })

    }catch(err){
res.status(404).json(err)
    }
}

const deleteUser = async(req, res) => {
    const id = req.params.id;
try{
await sql.connect(config);
await sql.query(`DELETE FROM users WHERE id = ${id}` )
res.status(200).json({
    status:"success",
    message:"User deleted successfully"
})
}catch(err){
res.status(400).json(err)
}
}


module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}