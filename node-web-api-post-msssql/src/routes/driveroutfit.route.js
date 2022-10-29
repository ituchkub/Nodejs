const express = require('express');
const router = express.Router({ mergeParams: true });

const driverOutfitController = require('../controllers/master/driveroutfit.controller');

router.route('/get')
  .post(driverOutfitController.getList);


module.exports = router;