const {Router} = require("express");

const router = new Router()

const controller = require('./controller')

router.route('/cart').get(controller.GET);
router.route('/cart').post(controller.POST);
router.route('/cart').delete(controller.DELETE);

module.exports = router