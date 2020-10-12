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

// First upload some csv files into account
// Get full paths to the file from the samples directory
const filePath = path.resolve('./files/users.csv');
// Load file's stats to get its size
const stat = fs.statSync(filePath);
// Create stream from the file to consume it to the api
const file = fs.createReadStream(filePath);

const fileNumber = 5;
let filesUploaded = 0;

function uploadCallback() {
  // Count each uploaded file
  filesUploaded++;

  // Call compress function when all files have been uploaded
  if (filesUploaded === fileNumber) {
    compressFiles();
  }
}

// Upload the same file as multiple file names for testing
for (let i = 0; i < fileNumber; i++) {
  api.uploadFile(evApiKey, evAccessToken, '/api-sample-code/users' + i + '.csv', stat.size, {'file': file}, uploadCallback);
}

// This function called when all files uploaded
function compressFiles() {

  // This callback will be called when file list is available
  const callback = function (error, data) {

    if (error) {
      console.error(error);
    } else {
      const resourceIds = data.data.map(resource => 'id:' + resource.id);

      // When compress completes call callback function
      const compressCallback = function (error, data) {
        if (error) {
          console.error(error);
        } else {
          console.log('Files compressed successfully to ' + data.data.attributes.path);
        }
      };

      // Call api method that compresses all files in the folder
      api.compressFiles(
        evApiKey,
        evAccessToken,
        {
          'body': {
            'resources': resourceIds,
            'parentResource': '/api-sample-code',
            'archiveName': 'compress-sample.zip'
          }
        },
        compressCallback
      );
    }
  };

  // Call api method to list all files in a folder
  api.listResources(
    evApiKey,
    evAccessToken,
    "/api-sample-code",
    {},
    callback
  );
}