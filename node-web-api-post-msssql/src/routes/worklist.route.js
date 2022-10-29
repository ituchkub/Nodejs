const express = require('express');
const router = express.Router({ mergeParams: true });

const worklistController = require('../controllers/master/worklist.controller');

router.route('/get')
  .post(worklistController.getList);


module.exports = router;