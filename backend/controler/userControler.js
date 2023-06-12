const {getDataWithQuery} = require('../model/dbopertion');
const db = require('../model');
// const { user } = require('../config/confiq');
const user = db.users;

const createUser = async(req,res)=>{
    try{
        const {firstName,lastName,phoneNumber,email,password} = req.body;
        console.log(firstName,lastName,phoneNumber);
        const data = await user.create({firstName,lastName,phoneNumber,email,password})
        res.status(200).json({
            status:'success',
            data
        })
    }catch(err){
res.status(404).json(err)
    }

}



const getAllUsers = async(req,res)=>{
    try{
    //query
    const users = await user.findAll();
    res.status(200).json({
        status:'success',
        data:users
    })
    }catch(err){
res.status(404).json(err)
    }
}

const getOneUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const userDetail = await user.findByPk(id);
        res.status(200).json({
            status:'success',
            data: userDetail
        })
        console.log('user one');
    }catch(err){
res.status(404).json(err);
    }
}

//update user

const updateUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const newuser = await user.update(req.body,{
            where:{id:id}
        })
        console.log(newuser);
        if(newuser == 1){
            res.status(201).json({
                status:'success',
                message:'user updated successfully',
                data:newuser
            })
        }else{
            res.status(404).json({
                message:"user not found"
            })
        }
    }catch(err){
res.status(404).json(err)
    }
}

const deleteUser = async(req, res) => {
    const id = req.params.id;
try{
await user.destroy({
    where :{id:id}
});
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