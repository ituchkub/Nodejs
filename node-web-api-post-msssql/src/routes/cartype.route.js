const express = require('express');
const router = express.Router({
  mergeParams: true
});

const carTypeController = require('../controllers/master/cartype.controller');

router.route('/get').post(carTypeController.get);
router.route('/post').post(carTypeController.post);

module.exports = router;