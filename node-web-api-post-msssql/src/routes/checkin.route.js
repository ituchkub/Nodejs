const express = require('express');
const router = express.Router({
  mergeParams: true
});

const checkinController = require('../controllers/checkin.controller');

router.route('/get').post(checkinController.get);
router.route('/post').post(checkinController.post);
router.route('/draining').post(checkinController.draining);
router.route('/dashboard').post(checkinController.dashboard);
router.route('/getmonitor').post(checkinController.getMonitor);
router.route('/Authorization').post(checkinController.authorization); // ITuChKuB
router.route('/checkedin').post(checkinController.checkedin); // ITuChKuB
router.route('/ReceiveQualityResult').post(checkinController.receiveQualityResult); // ITuChKuB

module.exports = router;