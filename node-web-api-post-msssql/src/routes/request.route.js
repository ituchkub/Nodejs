const express = require('express');
const router = express.Router({ mergeParams: true });

const rssController = require('../controllers/request/rss.controller');
const ltxController = require('../controllers/request/ltx.controller');
const strController = require('../controllers/request/str.controller');
const drcController = require('../controllers/request/drc.controller');

// router.route('/rss').post(rssController.getBeforeWeigthById);

router.route('/rss/before/getinfo').post(rssController.getBeforeWeigthById);
router.route('/rss/before/insert').post(rssController.beforeWeightInsertUpdate);

// router.route('/rss/after/test').post(rssController.testAfterStep2);

router.route('/rss/after/getstep1').post(rssController.getAfterWeightInfoStep1);
router.route('/rss/after/insertstep1').post(rssController.afterWeightStep1InsertUpdate);

router.route('/rss/after/getstep2').post(rssController.getAfterWeightInfoStep2);
router.route('/rss/after/insertstep2').post(rssController.afterWeightStep2InsertUpdate);

router.route('/rss/after/getstep3').post(rssController.getAfterWeightInfoStep3);
router.route('/rss/after/insertstep3').post(rssController.afterWeightStep3InsertUpdate);

router.route('/rss/after/getstep4').post(rssController.getAfterWeightInfoStep4);
router.route('/rss/after/insertstep4').post(rssController.afterWeightStep4InsertUpdate);

router.route('/rss/after/step4/approval/get').post(rssController.getAfterWeightStep4Approval);
router.route('/rss/after/step4/approval/post').post(rssController.postAfterWeightStep4Approval);

//-------LTX--------//
router.route('/ltx/after/step1/get').post(ltxController.getStep1);
router.route('/ltx/after/step1/update').post(ltxController.updateStep1);

router.route('/ltx/after/step1/randomness/get').post(ltxController.getStep1RandomnessDetail);
router.route('/ltx/after/step1/randomness/update').post(ltxController.updateStep1RandomnessDetail);

router.route('/ltx/after/step1/condition/get').post(ltxController.getStep1ConditionDetail);
router.route('/ltx/after/step1/condition/update').post(ltxController.updateStep1ConditionDetail);

router.route('/ltx/after/step2/get').post(ltxController.getStep2);
router.route('/ltx/after/step2/update').post(ltxController.updateStep2);

router.route('/ltx/after/step3/get').post(ltxController.getStep3);
router.route('/ltx/after/step3/update').post(ltxController.updateStep3);

router.route('/ltx/after/interface/post').post(ltxController.interface);

//-------STR--------//
router.route('/str/after/step1/get').post(strController.getStep1);
router.route('/str/after/step1/post').post(strController.postStep1);

router.route('/str/after/step2/get').post(strController.getStep2);
router.route('/str/after/step2/post').post(strController.postStep2);

router.route('/str/after/step2/toluenetest/get').post(strController.getStep2TolueneTest);
router.route('/str/after/step2/toluenetest/post').post(strController.postStep2TolueneTest);

router.route('/str/after/step3/get').post(strController.getStep3);
router.route('/str/after/step3/post').post(strController.postStep3);

router.route('/str/after/step3/sulphatetest/get').post(strController.getStep3SulphateTest);
router.route('/str/after/step3/sulphatetest/post').post(strController.postStep3SulphateTest);

router.route('/str/after/step4/get').post(strController.getStep4);
router.route('/str/after/step4/post').post(strController.postStep4);

router.route('/str/after/step4/approval/get').post(strController.getStep4Approval);
router.route('/str/after/step4/approval/post').post(strController.postStep4Approval);

router.route('/str/after/step4/contaminantcheck/get').post(strController.getStep4ContaminantCheck);
router.route('/str/after/step4/contaminantcheck/post').post(strController.postStep4ContaminantCheck);

router.route('/str/after/step4/contaminantcheck/employee/get').post(strController.getStep4ContaminantCheckEmployee);
router.route('/str/after/step4/contaminantcheck/employee/post').post(strController.postStep4ContaminantCheckEmployee);


router.route('/str/after/drc/get').post(drcController.getList);
router.route('/str/after/drc/insertupdate').post(drcController.insertUpdate);
router.route('/str/after/drc/approval/get').post(drcController.getApproval);
router.route('/str/after/drc/approval/post').post(drcController.postApproval);
router.route('/str/after/drc/interface').post(drcController.interface);

module.exports = router;