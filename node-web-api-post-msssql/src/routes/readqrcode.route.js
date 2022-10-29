const express = require('express');
const router = express.Router({
  mergeParams: true
});

const readQrCodeController = require('../controllers/master/readqrcode.controller');

router.route('/get').post(readQrCodeController.get);

module.exports = router;