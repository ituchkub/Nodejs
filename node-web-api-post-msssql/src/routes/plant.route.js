const express = require('express');
const router = express.Router({
  mergeParams: true
});

const plantController = require('../controllers/master/plant.controller');

router.route('/get').post(plantController.get);
router.route('/post').post(plantController.post);

module.exports = router;