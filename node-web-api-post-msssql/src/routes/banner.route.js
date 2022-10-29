const express = require('express');
const router = express.Router({ mergeParams: true });

const bannerController = require('../controllers/master/banner.controller');

router.route('/get')
  .post(bannerController.getList);

  router.route('/insertupdate')
  .post(bannerController.insertUpdate);

module.exports = router;