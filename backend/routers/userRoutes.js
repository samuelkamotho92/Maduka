const express = require('express');
const userRouter = express.Router();
const userControler = require('../controler/userControler')


userRouter
.route('/getUsers')
.get(userControler.getAllUsers)

userRouter
.route('/:id')
.get(userControler.getOneUser)
.put(userControler.updateUser)
.delete(userControler.deleteUser)

userRouter.post('/createUser',userControler.createUser)
module.exports = userRouter;