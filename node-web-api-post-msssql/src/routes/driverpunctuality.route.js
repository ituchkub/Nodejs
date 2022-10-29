const express = require('express');
const router = express.Router({ mergeParams: true });

const driverPunctualityController = require('../controllers/master/driverpunctuality.controller');

router.route('/get')
  .post(driverPunctualityController.getList);


module.exports = router;