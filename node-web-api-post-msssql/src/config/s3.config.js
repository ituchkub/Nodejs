require('dotenv').config()
const AWS = require('aws-sdk');

const client = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION,
  endpoint: process.env.AWS_ENDPOINT,
});

const s3 = {
  client: client,
  bucket_name: process.env.AWS_BUCKET,
};

module.exports = s3;