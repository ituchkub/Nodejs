const express = require('express');
const router = express.Router({
  mergeParams: true
});

const strContaminantTypeController = require('../controllers/master/strcontaminanttype.controller');

router.route('/get').post(strContaminantTypeController.get);
router.route('/post').post(strContaminantTypeController.post);

module.exports = router;