const express = require('express');
const router = express.Router({ mergeParams: true });

const truckConditionController = require('../controllers/master/truckcondition.controller');

router.route('/get')
  .post(truckConditionController.getList);


module.exports = router;