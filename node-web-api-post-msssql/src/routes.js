const express = require('express');
const router = express.Router();
const swagger = require('./routes/swagger.route');
const checkin = require('./routes/checkin.route');
const checkinhistory = require('./routes/checkinhistory.route');


// Public Path
router.use('/swagger', swagger);
router.get('/', (req, res) => res.send('Sritrang Smart Receive API Version 1.0'));
router.use('/checkin', checkin);
router.use('/checkinhistory', checkinhistory);




module.exports = router;