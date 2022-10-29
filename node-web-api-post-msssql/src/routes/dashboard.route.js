const express = require('express');
const router = express.Router({ mergeParams: true });

const dashboardController = require('../controllers/master/dashboard.controller');

router.route('/get')
  .post(dashboardController.getList);


module.exports = router;