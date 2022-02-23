const {Router} = require('express');

const router = new Router();

// modules
const admin = require('../modules/admin/router');
const restaraunts = require('../modules/restaraunts/router');
const branches = require('../modules/branches/router');
const foods = require('../modules/foods/router');
const cart = require('../modules/cart/router');
const regions = require('../modules/regions/router');
const order = require('../modules/order/router');


router
    .use("/api", admin) 
    .use("/api", restaraunts) 
    .use("/api", branches) 
    .use("/api", foods) 
    .use("/api", cart) 
    .use("/api", regions) 
    .use("/api", order) 

module.exports = router;