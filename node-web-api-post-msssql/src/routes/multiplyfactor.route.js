const express = require('express');
const router = express.Router({ mergeParams: true });

const multiplyFactorController = require('../controllers/master/multiplyfactor.controller');

router.route('/get')
  .post(multiplyFactorController.getList);

  router.route('/insertupdate')
  .post(multiplyFactorController.insertUpdate);

module.exports = router;