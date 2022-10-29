const express = require('express');
const router = express.Router({
  mergeParams: true
});

const strContaminantFoundController = require('../controllers/master/strcontaminantfound.controller');

router.route('/get').post(strContaminantFoundController.get);
router.route('/post').post(strContaminantFoundController.post);

module.exports = router;