const express = require('express');
const router = express.Router({ mergeParams: true });

const contaminantFoundController = require('../controllers/master/contaminantfound.controller');

router.route('/get')
  .post(contaminantFoundController.getList);


module.exports = router;