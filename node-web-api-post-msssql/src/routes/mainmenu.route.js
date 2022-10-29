const express = require('express');
const router = express.Router({ mergeParams: true });

const mainMenuController = require('../controllers/master/mainmenu.controller');

router.route('/get')
  .post(mainMenuController.getList);

router.route('/insertupdate')
  .post(mainMenuController.insertUpdate);


module.exports = router;