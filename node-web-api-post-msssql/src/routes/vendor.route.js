const express = require('express');
const router = express.Router({
  mergeParams: true
});

const vendorController = require('../controllers/master/vendor.controller');

router.route('/get').post(vendorController.get);
router.route('/post').post(vendorController.post);

module.exports = router;