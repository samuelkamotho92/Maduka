const config = require('../config/confiq');
const  bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const sql = require('mssql');
const createUser = async(req,res)=>{
    console.log('checking user registration');
    const {fullname,username,phonenumber,email,password} = req.body
    console.log(fullname,username,phonenumber,email,password);
//     // //hash the password
    const hashedpwd = bcrypt.hashSync(password,10);
    try{
let pool = await sql.connect(config);
let insertUser = await pool.request()
.input('fullname',sql.VarChar,fullname)
.input('username',sql.VarChar,username)
.input('phonenumber',sql.VarChar,phonenumber)
.input('email',sql.VarChar,email)
.input('password',sql.VarChar,hashedpwd)
.query('INSERT INTO users (fullname,username,phonenumber,email,password) VALUES (@fullname,@username,@phonenumber,@email,@password)')
console.log(insertUser);
res.status(200).json({
    status:'success',
    user:insertUser
})
    }catch(err){
res.status(404).json(err);
    }

}

//login user

const loginUser = async(req,res)=>{
    console.log(req.body);
    console.log(process.env.SECRET)
const {email,password} = req.body;
//connection db
let pool = await sql.connect(config)
const result = await pool.request()
.input('email',sql.VarChar,email)
.query('SELECT * FROM users WHERE email = @email');
const user = result.recordset[0];
console.log(user);
if(!user){
    res.status(404).json({
        status:'error',
        message:'user not found'
    })
}else{
    if(!bcrypt.compareSync(password,user.password)){
        res.status(404).json({
            status:'error',
            message:"password does not match"
        })
    }else{
        //create a jwt token store it 
        const token = `${jwt.sign({email:user.email,isAdmin:user.isAdmin},process.env.SECRET,{expiresIn:process.env.EXPIRY})}`
        res.status(200).json({
            status:'success',
            data:user,
            accesToken:token
        })
    }
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
    deleteUser,
    loginUser
}