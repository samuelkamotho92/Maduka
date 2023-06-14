const express = require('express');
const epRouter = express.Router();
const epControler = require('../controler/Enterprise')
epRouter
.route('/')
.get(epControler.getEnterprises)
.post(epControler.createEnterprise)

epRouter
.route('/:id')

module.exports = epRouter