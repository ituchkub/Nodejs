const express = require('express');
const router = express.Router({
  mergeParams: true
});

const Controller = require('../controllers/controller');

router.route('/get').post(Controller.get);
router.route('/post').post(Controller.post);
router.route('/draining').post(Controller.draining);
router.route('/dashboard').post(Controller.dashboard);
router.route('/getmonitor').post(Controller.getMonitor);
router.route('/Authorization').post(Controller.authorization); // ITuChKuB
router.route('/checkedin').post(Controller.checkedin); // ITuChKuB
router.route('/ReceiveQualityResult').post(Controller.receiveQualityResult); // ITuChKuB

module.exports = router;