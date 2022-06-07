const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'root', // MYSQL USERNAME
    password : '0000', // MYSQL PASSWORD
    database : 'nodejs_login' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;