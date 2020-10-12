// Load environment variables from .env file
require('dotenv').config();
const path = require('path');
const fs = require('fs');

const ExaVaultApi = require('../src/index');

// Create api object instance. Account name specified by using corresponding environment variable (EV_ACCOUNT_NAME)
const api = new ExaVaultApi.ResourcesApi(
  new ExaVaultApi.ApiClient({
    'accountname': process.env.EV_ACCOUNT_NAME
  })
);

// Use environment variables for api key (EV_API_KEY) and access token (EV_ACCESS_TOKEN) which are required for calling ExaVault API
const evApiKey = process.env.EV_API_KEY;
const evAccessToken = process.env.EV_ACCESS_TOKEN;

// This is callback function that gets called when upload completes
const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('File "' + data.data.attributes.path + '" uploaded successfully');
  }
};

// Get full paths to the file from the samples directory
const filePath = path.resolve('./files/dog.jpg');
// Load file's stats to get its size
const stat = fs.statSync(filePath);
// Create stream from the file to consume it to the api
const file = fs.createReadStream(filePath);

// Make an api call to upload the file to the destination of /api-sample-code/dog.jpg
api.uploadFile(evApiKey, evAccessToken, '/api-sample-code/dog.jpg', stat.size, {'file': file}, callback);

