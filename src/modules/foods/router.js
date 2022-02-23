const {Router} = require("express");
const {mediaUpload , mediaUploadUpdate , imageUpload} = require("../../middlewares/upload");
const {adminAuth} = require("../../middlewares/auth")
const router = new Router()

const controller = require('./controller')

router.route('/foods/:id?').get(controller.GET);
router.route('/foods').post(adminAuth, mediaUpload, controller.POST);
router.route('/foods').put(adminAuth ,mediaUploadUpdate , controller.UPDATE);
router.route('/foods').delete(adminAuth ,controller.DELETE);

module.exports = router