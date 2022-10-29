const express = require('express');
const router = express.Router({ mergeParams: true });

const materialThicknessController = require('../controllers/master/materialthickness.controller');

router.route('/get')
  .post(materialThicknessController.getList);  


module.exports = router;