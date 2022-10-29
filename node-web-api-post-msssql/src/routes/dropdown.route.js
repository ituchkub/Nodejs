const express = require('express');
const router = express.Router({ mergeParams: true });

const dropdownController = require('../controllers/master/dropdown.controller');

router.route('/get')
  .post(dropdownController.getList);


module.exports = router;