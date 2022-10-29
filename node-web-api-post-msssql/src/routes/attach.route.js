const express = require('express');
const router = express.Router({ mergeParams: true });

const attachController = require('../controllers/master/attach.controller');
const s3Controller = require('../controllers/s3.controller.js');
const upload = require('../config/multer');

// router.route('/get').post(attachController.getAttachFile); //local storage
router.route('/get').post(s3Controller.download);
// router.route('/insert').post(attachController.insertAttachFile); //local storage
router.post('/insert', upload.array('files'), s3Controller.upload);
router.route('/delete').post(attachController.deleteAttachFile);

// router.route('/email').post(attachController.sendEmail);

module.exports = router