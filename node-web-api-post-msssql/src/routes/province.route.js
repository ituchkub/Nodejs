const express = require('express');
const router = express.Router({ mergeParams: true });

const provinceController = require('../controllers/master/province.controller');

router.route('/get')
  .post(provinceController.getList);


module.exports = router;