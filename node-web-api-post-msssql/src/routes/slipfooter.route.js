const express = require('express');
const router = express.Router({ mergeParams: true });

const slipController = require('../controllers/master/slipfooter.controller');

router.route('/get')
  .post(slipController.getList);

  router.route('/insertupdate')
  .post(slipController.insertUpdate);

module.exports = router;