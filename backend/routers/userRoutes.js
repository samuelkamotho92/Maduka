const express = require('express');
const userRouter = express.Router();
const userControler = require('../controler/userControler')
const {verifyToken,verifyTokenAdmin} = require('../utility/verifyToken');
const {getDataWithQuery} = require('../model/dbopertion');

userRouter
.route('/')
.get(verifyToken,userControler.getAllUsers)
.post(userControler.createUser)

userRouter
.route('/:id')
.get(userControler.getOneUser)
.put(userControler.updateUser)
.delete(userControler.deleteUser)

userRouter
.route('/login')
.post(userControler.loginUser)


module.exports = userRouter;