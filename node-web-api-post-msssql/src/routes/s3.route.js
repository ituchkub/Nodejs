const express = require('express');
const router = express.Router();

const upload = require('../config/multer');
const controller = require('../controllers/s3.controller.js');

// endpoint - http://localhost:3001/api/upload
// 'file' is the name of our file input field in the form
router.post('/upload', upload.array('files'), controller.upload);

module.exports = router;