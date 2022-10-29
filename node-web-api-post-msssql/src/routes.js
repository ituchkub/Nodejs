const express = require('express');
const router = express.Router();
const checkin = require('./routes/route');



// Public Path
router.get('/', (req, res) => res.send('Sritrang Smart Receive API Version 1.0'));
router.use('/checkin', checkin);




module.exports = router;