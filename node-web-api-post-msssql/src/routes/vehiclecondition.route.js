const express = require('express');
const router = express.Router({ mergeParams: true });

const vihicleController = require('../controllers/master/vehiclecondition.controller');

router.route('/get')
  .post(vihicleController.getList);


module.exports = router;