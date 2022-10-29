const s3 = require('../config/s3.config');

async function getImage(fileData) {
  try {
    const data = s3.client.getObject({
      Bucket: s3.bucket_name,
      Key: fileData?.PathName,
    }).promise();

    return data;
  } catch {
    return false;
  }
}

function encode(data) {
  let buf = Buffer.from(data);
  let base64 = buf.toString('base64');

  return base64
}

var fs = require('fs');
var util = require('util');
var dir = 'logs';
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}
var datetime = new Date();
var date = datetime.toISOString().slice(0,10);

// var logFile = fs.createWriteStream(dir + '/log-' + date + '.txt', { flags: 'a' });
var logFile = fs.createWriteStream(dir + '/log.txt', { flags: 'w' });
  // Or 'w' to truncate the file every time the process starts.
var logStdout = process.stdout;

console.log = function () {
  logFile.write(util.format.apply(null, arguments) + '\n');
  logStdout.write(util.format.apply(null, arguments) + '\n');
}
console.error = console.log;

module.exports.getImage = getImage;
module.exports.encode = encode;
// module.exports.wlog = console.log;