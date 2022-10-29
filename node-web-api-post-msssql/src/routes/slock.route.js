const express = require('express');
const router = express.Router({
  mergeParams: true
});

const slockController = require('../controllers/master/slock.controller');

router.route('/get').post(slockController.get);
router.route('/post').post(slockController.post);

module.exports = router;