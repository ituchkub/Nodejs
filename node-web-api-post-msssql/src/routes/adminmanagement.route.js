const express = require('express');
const router = express.Router({ mergeParams: true });

const adminManagementController = require('../controllers/master/adminmanagement.controller');

router.route('/get')
  .post(adminManagementController.getList);


module.exports = router;