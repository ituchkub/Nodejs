const express = require('express');
const router = express.Router({ mergeParams: true });

const checkingController = require('../controllers/master/checking.controller');

router.route('/get')
  .post(checkingController.getList);


module.exports = router;