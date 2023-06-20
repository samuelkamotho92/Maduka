const express = require('express');
const userRouter = require('./routers/userRoutes')
const epRouter = require('./routers/enterprise')
const auctionRouter = require('./routers/auctionRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({path:'./.env'});
// const db = require('./model');
const app = express();
app.use(cors({
    origin:["http://localhost:5173"]
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const port = 8000
// db.sequelize.sync();

//connecting to mysql
 //query
app.use('/users',userRouter);
app.use('/enterprise',epRouter);
app.use('/auctions',auctionRouter)
app.listen(port,()=>{
    console.log(`listening on ${port}`)
})


