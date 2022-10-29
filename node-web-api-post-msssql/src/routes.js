const express = require('express');
const router = express.Router();
const swagger = require('./routes/swagger.route');
// const app = express();
const auth = require('./middleware/auth');

const accounts = require('./routes/accounts.route');
const attach = require('./routes/attach.route');
const upload = require('./routes/s3.route');
const cartype = require('./routes/cartype.route');
const checkin = require('./routes/checkin.route');
const checkinhistory = require('./routes/checkinhistory.route');
const checkinprofile = require('./routes/checkinprofile.route');
const employeeprofile = require('./routes/employeeprofile.route');
const plant = require('./routes/plant.route');
const plantweightrubbertesthistory = require('./routes/plantweightrubbertesthistory.route');
const productmaterial = require('./routes/productmaterial.route');
const queuemanagement = require('./routes/queuemanagement.route');
const producttype = require('./routes/producttype.route');
const readqrcode = require('./routes/readqrcode.route');
const sender = require('./routes/sender.route');
const slock = require('./routes/slock.route');
const vendor = require('./routes/vendor.route');
const weighing = require('./routes/weighing.route');
const request = require('./routes/request.route');
const materialCondition = require('./routes/materialcondition.route')
const rubberPacking = require('./routes/rubberpacking.route')
const vehicleCondition = require('./routes/vehiclecondition.route')
const truckCondition = require('./routes/truckcondition.route')
const driverOutfit = require('./routes/driveroutfit.route')
const driverPunctuality = require('./routes/driverpunctuality.route')
const safety = require('./routes/safety.route')
const environment = require('./routes/environment.route')
const materialHeight = require('./routes/materialheight.route')
const materialThickness = require('./routes/materialthickness.route')
const vehicleParking = require('./routes/vehicleparking.route')
const mainMenu = require('./routes/mainmenu.route')
const contaminantFound = require('./routes/contaminantfound.route')
const appearanceCheck = require('./routes/appearancecheck.route')
const banner = require('./routes/banner.route')
const slip = require('./routes/slipfooter.route')
const strcontaminant = require('./routes/strcontaminant.route')
const strcontaminantfines = require('./routes/strcontaminantfines.route')
const strcontaminantfound = require('./routes/strcontaminantfound.route')
const strcontaminanttype = require('./routes/strcontaminanttype.route')
const rssContaminantFines = require('./routes/rsscontaminantfines.route')
const checking = require('./routes/checking.route')
const adminManagement = require('./routes/adminmanagement.route')
const province = require('./routes/province.route')
const randomPlan = require('./routes/randomplan.route')
const multiplyFactor = require('./routes/multiplyfactor.route')
const acceptanceRate = require('./routes/acceptancerate.route')
const weightBeforePressing = require('./routes/weightbeforepressing.route')
const dropdown = require('./routes/dropdown.route')
const permission = require('./routes/permission.route')
const draintime = require('./routes/draintime.route')
const batch = require('./routes/batch.route')
const satisfaction = require('./routes/satisfaction.route')
const dashboard = require('./routes/dashboard.route');
const worklist = require('./routes/worklist.route');
router.use('/', upload);

// Public Path
router.use('/swagger', swagger);
router.get('/', (req, res) => res.send('Sritrang Smart Receive API Version 1.0'));
router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});
router.get('/image/:name', (req, res) => {
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.sendFile(req.params.name, {root: './upload'});
});

router.use(auth)
// Master
router.use('/accounts', accounts);
router.use('/attach', attach);
// router.use('/upload', upload);
router.use('/cartype', cartype);
router.use('/checkin', checkin);
router.use('/checkinhistory', checkinhistory);
router.use('/checkinprofile', checkinprofile);
router.use('/employeeprofile', employeeprofile);
router.use('/plant', plant);
router.use('/plantweightrubbertesthistory', plantweightrubbertesthistory);
router.use('/productmaterial', productmaterial);
router.use('/queuemanagement', queuemanagement);
router.use('/producttype', producttype);
router.use('/readqrcode', readqrcode);
router.use('/sender', sender);
router.use('/slock', slock);
router.use('/vendor', vendor);
router.use('/weighing', weighing);
router.use('/materialcondition', materialCondition);
router.use('/rubberpacking', rubberPacking);
router.use('/vehiclecondition', vehicleCondition);
router.use('/truckcondition', truckCondition);
router.use('/driveroutfit', driverOutfit);
router.use('/driverpunctuality', driverPunctuality);
router.use('/safety', safety);
router.use('/environment', environment);
router.use('/materialheight', materialHeight);
router.use('/materialthickness', materialThickness);
router.use('/vehicleparking', vehicleParking);
router.use('/mainmenu', mainMenu);
router.use('/contaminantfound', contaminantFound);
router.use('/appearancecheck', appearanceCheck);
router.use('/bannerkiosk', banner);
router.use('/slipfooter', slip);
router.use('/strcontaminant', strcontaminant);
router.use('/strcontaminantfines', strcontaminantfines);
router.use('/strcontaminantfound', strcontaminantfound);
router.use('/strcontaminanttype', strcontaminanttype);
router.use('/rsscontaminantfines', rssContaminantFines);
router.use('/checking', checking);
router.use('/adminmanagement', adminManagement);
router.use('/province', province);
router.use('/randomplan', randomPlan);
router.use('/multiplyfactor', multiplyFactor);
router.use('/acceptancerate', acceptanceRate);
router.use('/weightbeforepressing', weightBeforePressing);
router.use('/dropdown', dropdown);
router.use('/permission', permission);
router.use('/draintime', draintime);
router.use('/batch', batch);
router.use('/satisfaction', satisfaction);
router.use('/dashboard', dashboard);
router.use('/worklist', worklist);

// Request
router.use('/request', request);



module.exports = router;