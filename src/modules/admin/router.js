const {Router} = require("express");
const {mediaUpload , mediaUploadUpdate , imageUpload} = require("../../middlewares/upload");
const {adminAuth} = require("../../middlewares/auth")
const router = new Router()

const controller = require('./controller')

router.route('/admin/:id?').get(adminAuth ,controller.GET);
router.route('/registion').post(mediaUpload , controller.POST);
router.route('/admin').put(mediaUploadUpdate , controller.UPDATE);
router.route('/admin').delete(controller.DELETE);

module.exports = router