const express = require('express');
const router = express.Router({ mergeParams: true });

const vehicleParkingController = require('../controllers/master/vehicleparking.controller');

router.route('/get')
  .post(vehicleParkingController.getList);


module.exports = router;