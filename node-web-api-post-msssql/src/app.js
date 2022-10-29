// require('dotenv').config()

const express = require('express')
const http = require('http');
// const https = require('https');
const cors = require('cors');
const helmet = require('helmet')
const app = express();
// const swagger = require('./routes/swagger.route');

// /* ------------------ Setup ------------------ */
//CORS policy
// const corsOptions = {
//   origin: process.env.WEB_URL,
//   credentials: true,
// };
// app.use(cors(corsOptions));

app.use(cors());
app.use(helmet());
app.use(express.json());

// /* ------------------ Route ------------------ */
const routes = require('./routes');
app.use('/api', routes);

// /* ------------------ Component ------------------ */
const config = require('./config/config');

const {port, serviceName} = config;
// const {https:{ key, cert}, port, isHttps, serviceName} = config;
// const credentials = {key, cert};

//start http server
const httpServer = http.createServer(app);
httpServer.listen(port);
console.log(`[${serviceName}] http server listening at port ${port}`);

//start https server
// if(isHttps) {
//   const httpsServer = https.createServer(credentials, app);
//   httpsServer.listen(port+1);
//   console.log(`[${serviceName}] https server listening at port ${port + 1}`);
// }

module.exports = { app };

// /* ----------------------------------------------- */
// // export default app;