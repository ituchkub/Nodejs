const express = require('express');
const router = express.Router({ mergeParams: true });

const satisfactionController = require('../controllers/master/satisfaction.controller');

router.route('/get')
  .post(satisfactionController.getList);

  router.route('/post')
  .post(satisfactionController.insertUpdate);

module.exports = router;