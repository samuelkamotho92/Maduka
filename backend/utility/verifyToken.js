const jwt = require('jsonwebtoken');
const verifyToken = async(req,resp,next)=>{
//get from header
const autheader = req.headers.token;
console.log(autheader);
if(autheader){
const tk = autheader.split(' ')[1];
console.log(tk);
jwt.verify(tk,process.env.SECRET,(err,user)=>{
    if(err){
        console.log(err);
            return resp.status(403).json("Token is not valid!");
    }else{
        req.user = user;
        console.log(user);
        console.log(req.user.isAdmin);
        next();
    }
})
}else{
    req.user = undefined;
resp.status(403).json("Token is not valid!");
}
next();
}

//only admins
const verifyTokenAdmin = async(req,res)=>{
    console.log(req.user.isAdmin);
if(req.user.isAdmin){
    next();
}else{
    res.status(403).json({
        message:"not authorised to do that"
    })
}
}


//



module.exports = {
    verifyToken,
    verifyTokenAdmin
} 