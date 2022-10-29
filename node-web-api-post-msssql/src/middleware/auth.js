// const app = express();
// const swagger = require('./routes/swagger.route');

module.exports = (req, res, next) => {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if(token == process.env.JWT_SECRET) {
    // res.setHeader('Access-Control-Allow-Origin', process.env.WEB_URL); //Forproduction
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  } else {
    res.sendStatus(401)
  }
};