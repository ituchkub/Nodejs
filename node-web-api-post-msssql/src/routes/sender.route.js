const express = require('express');
const router = express.Router({
  mergeParams: true
});

const senderController = require('../controllers/master/sender.controller');

router.route('/get').post(senderController.get);
router.route('/post').post(senderController.post);

module.exports = router;