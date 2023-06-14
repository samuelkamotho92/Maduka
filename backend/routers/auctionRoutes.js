const express = require('express');
const auctionRouter = express.Router();
const auctionCt = require('../controler/auctions')
auctionRouter
.route('/')
.get(auctionCt.getAuctions)
.post(auctionCt.createAuction)

auctionRouter
.route('/:id')
.get(auctionCt.getOneAuction)
.delete(auctionCt.deleteAuction)

//update controller
module.exports = auctionRouter