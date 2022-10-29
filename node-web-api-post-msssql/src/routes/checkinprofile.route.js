const express = require('express');
const router = express.Router({
  mergeParams: true
});

const checkinProfileController = require('../controllers/master/checkinprofile.controller');

router.route('/get').post(checkinProfileController.get);
router.route('/post').post(checkinProfileController.post);

module.exports = router;