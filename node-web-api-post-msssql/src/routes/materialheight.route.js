const express = require('express');
const router = express.Router({ mergeParams: true });

const materialHeightController = require('../controllers/master/materialheight.controller');

router.route('/get')
  .post(materialHeightController.getList);  


module.exports = router;