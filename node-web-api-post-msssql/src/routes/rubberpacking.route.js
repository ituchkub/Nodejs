const express = require('express');
const router = express.Router({ mergeParams: true });

const packingController = require('../controllers/master/rubberpacking.controller');

router.route('/get')
  .post(packingController.getList);


module.exports = router;