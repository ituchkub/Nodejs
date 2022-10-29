const express = require('express');
const router = express.Router({
  mergeParams: true
});

const strContaminantController = require('../controllers/master/strcontaminant.controller');

router.route('/get').post(strContaminantController.get);
router.route('/post').post(strContaminantController.post);

module.exports = router;