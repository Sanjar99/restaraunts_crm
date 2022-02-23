const {Router} = require("express");
const {mediaUpload , mediaUploadUpdate , imageUpload} = require("../../middlewares/upload");
const {adminAuth} = require("../../middlewares/auth")

const router = new Router()

const controller = require('./controller')

router.route('/branches/:id?').get(controller.GET);
router.route('/branches').post(adminAuth ,mediaUpload , controller.POST);

module.exports = router