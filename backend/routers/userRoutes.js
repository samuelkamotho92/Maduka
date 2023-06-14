const express = require('express');
const userRouter = express.Router();
const userControler = require('../controler/userControler')
const {getDataWithQuery} = require('../model/dbopertion');

userRouter
.route('/')
.get(userControler.getAllUsers)
.post(userControler.createUser)

userRouter
.route('/:id')
.get(userControler.getOneUser)
.put(userControler.updateUser)
.delete(userControler.deleteUser)


module.exports = userRouter;