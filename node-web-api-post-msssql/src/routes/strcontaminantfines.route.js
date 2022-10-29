const express = require('express');
const router = express.Router({ mergeParams: true });

const strContaminantFinesController = require('../controllers/master/strcontaminantfines.controller');

router.route('/get')
  .post(strContaminantFinesController.getList);

  router.route('/insertupdate')
  .post(strContaminantFinesController.insertUpdate);

module.exports = router;