const express = require('express');
const router = express.Router({
  mergeParams: true
});

const employeeProfileController = require('../controllers/master/employeeprofile.controller');

router.route('/get').post(employeeProfileController.get);
router.route('/post').post(employeeProfileController.post);

module.exports = router;