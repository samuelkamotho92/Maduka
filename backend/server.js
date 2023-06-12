const express = require('express');
const userRouter = require('./routers/userRoutes')
const db = require('./model');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const port = 8000
db.sequelize.sync();

//connecting to mysql
 //query
app.use('/users/',userRouter);
app.listen(port,()=>{
    console.log(`listening on ${port}`)
})


