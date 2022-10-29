const express = require('express');
const router = express.Router({ mergeParams: true });

const acceptanceRateController = require('../controllers/master/acceptancerate.controller');

router.route('/get')
  .post(acceptanceRateController.getList);

  router.route('/insertupdate')
  .post(acceptanceRateController.insertUpdate);

module.exports = router;