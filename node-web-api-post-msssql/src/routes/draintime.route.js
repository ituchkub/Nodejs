const express = require('express');
const router = express.Router({ mergeParams: true });

const drainTimeController = require('../controllers/master/draintime.controller');

router.route('/get')
  .post(drainTimeController.getList);

  router.route('/insertupdate')
  .post(drainTimeController.insertUpdate);

module.exports = router;