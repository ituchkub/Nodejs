const express = require('express');
const router = express.Router({ mergeParams: true });

const permissionController = require('../controllers/master/permission.controller');

router.route('/get')
  .post(permissionController.getList);

  router.route('/insertupdate')
  .post(permissionController.insertUpdate);

module.exports = router;