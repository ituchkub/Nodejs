const express = require('express');
const router = express.Router({ mergeParams: true });

const weightBeforePressingController = require('../controllers/master/weightbeforepressing.controller');

router.route('/get')
  .post(weightBeforePressingController.getList);

  router.route('/insertupdate')
  .post(weightBeforePressingController.insertUpdate);

module.exports = router;