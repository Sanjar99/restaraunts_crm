const {Router} = require("express");
const {adminAuth} = require("../../middlewares/auth")

const router = new Router()

const controller = require('./controller')

router.route('/regions').get(controller.GET);
router.route('/regions').post(adminAuth ,controller.POST);
router.route('/regions').delete(adminAuth ,controller.DELETE);

module.exports = router