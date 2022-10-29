const express = require('express');
const router = express.Router({ mergeParams: true });

const appearanceCheckController = require('../controllers/master/appearancecheck.controller');

router.route('/get')
  .post(appearanceCheckController.getList);


module.exports = router;