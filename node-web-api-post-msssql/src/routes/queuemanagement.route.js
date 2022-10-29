const express = require('express');
const router = express.Router({
  mergeParams: true
});

const queueManagementController = require('../controllers/master/queuemanagement.controller');

router.route('/get').post(queueManagementController.get);
router.route('/post').post(queueManagementController.post);

module.exports = router;