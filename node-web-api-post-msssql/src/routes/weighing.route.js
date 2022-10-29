const express = require('express');
const router = express.Router({
  mergeParams: true
});

const weighingController = require('../controllers/master/weighing.controller');

router.route('/get').post(weighingController.get);
router.route('/post').post(weighingController.post);

module.exports = router;