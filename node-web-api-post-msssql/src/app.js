
const express = require('express')
const http = require('http');
const cors = require('cors');
const helmet = require('helmet')
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const routes = require('./routes');
app.use('/api', routes);
const config = require('./config/config');
const {port, serviceName} = config;
const httpServer = http.createServer(app);
httpServer.listen(port);
console.log(`[${serviceName}] http server listening at port ${port}`);
module.exports = { app };
