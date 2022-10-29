const express = require('express');
const router = express.Router({
  mergeParams: true
});

const productTypeController = require('../controllers/master/producttype.controller');

router.route('/get').post(productTypeController.get);
router.route('/post').post(productTypeController.post);

module.exports = router;