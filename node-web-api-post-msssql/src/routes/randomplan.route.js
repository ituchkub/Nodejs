const express = require('express');
const router = express.Router({ mergeParams: true });

const randomPlanController = require('../controllers/master/randomplan.controller');

router.route('/get')
  .post(randomPlanController.getList);

  router.route('/insertupdate')
  .post(randomPlanController.insertUpdate);

module.exports = router;