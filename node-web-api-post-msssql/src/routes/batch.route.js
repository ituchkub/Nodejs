const express = require('express');
const router = express.Router({ mergeParams: true });

const batchController = require('../controllers/master/batch.controller');

router.route('/get')
  .post(batchController.getList);

  router.route('/insertupdate')
  .post(batchController.insertUpdate);

module.exports = router;