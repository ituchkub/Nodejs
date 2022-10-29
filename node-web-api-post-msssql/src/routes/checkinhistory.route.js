const express = require('express');
const router = express.Router({
  mergeParams: true
});

const checkinHistoryController = require('../controllers/master/checkinhistory.controller');

router.route('/get').post(checkinHistoryController.get);
router.route('/post').post(checkinHistoryController.post);

module.exports = router;