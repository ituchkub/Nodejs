const express = require('express');
const router = express.Router({ mergeParams: true });

const materialController = require('../controllers/master/materialcondition.controller');

router.route('/get')
  .post(materialController.getList);

  router.route('/insertupdate')
  .post(materialController.insertUpdate);


module.exports = router;