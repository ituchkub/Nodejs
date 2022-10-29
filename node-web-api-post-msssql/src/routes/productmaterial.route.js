const express = require('express');
const router = express.Router({
  mergeParams: true
});

const productMaterialController = require('../controllers/master/productmaterial.controller');

router.route('/get').post(productMaterialController.get);
router.route('/post').post(productMaterialController.post);

module.exports = router;