const express = require('express');
const router = express.Router({ mergeParams: true });

const rssContaminantFinesController = require('../controllers/master/rsscontaminantfines.controller');

router.route('/get')
  .post(rssContaminantFinesController.getList);

  router.route('/insertupdate')
  .post(rssContaminantFinesController.insertUpdate);

module.exports = router;