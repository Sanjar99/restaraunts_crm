const {Router} = require("express");
const {adminAuth} = require("../../middlewares/auth")

const router = new Router()

const controller = require('./controller')

router.route('/order').get(adminAuth, controller.GET);
router.route('/orderDetails/:id?').get(adminAuth ,controller.GET_ORDER_DETAILS);
router.route('/order').post(adminAuth ,controller.POST);
router.route('/order').delete(adminAuth ,controller.DELETE);

module.exports = router