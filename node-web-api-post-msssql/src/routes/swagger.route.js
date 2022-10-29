const express = require('express');
const router = express.Router({
  mergeParams: true
});

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

router.use('/ui', function (req, res, next) {
  swaggerDocument.host = req.get('host');
  req.swaggerDoc = swaggerDocument;
  next();
}, swaggerUi.serve, swaggerUi.setup());

// eslint-disable-next-line no-unused-vars
router.use('/docs', function (req, res, next) {
  swaggerDocument.host = req.get('host');
  res.send(swaggerDocument);
});

module.exports = router;