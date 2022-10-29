const express = require('express');
const router = express.Router({ mergeParams: true });

const environmentController = require('../controllers/master/environment.controller');

router.route('/get')
  .post(environmentController.getList);


module.exports = router;