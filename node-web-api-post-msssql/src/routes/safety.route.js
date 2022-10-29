const express = require('express');
const router = express.Router({ mergeParams: true });

const safetyController = require('../controllers/master/safety.controller');

router.route('/get')
  .post(safetyController.getList);


module.exports = router;