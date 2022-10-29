const express = require('express');
const router = express.Router({
  mergeParams: true
});

const plantWeightRubberTestHistoryController = require('../controllers/master/plantweightrubbertesthistory.controller');

router.route('/get').post(plantWeightRubberTestHistoryController.get);
router.route('/post').post(plantWeightRubberTestHistoryController.post);

module.exports = router;