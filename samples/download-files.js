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

  // Call download function when all files have been uploaded
  if (filesUploaded === fileNumber) {
    downloadFiles();
  }
}

// Upload the same file as multiple file names for testing
for (let i = 0; i < fileNumber; i++) {
  api.uploadFile(evApiKey, evAccessToken, '/api-sample-code/users' + i + '.csv', stat.size, {'file': file}, uploadCallback);
}

// This is function that will be called when upload finishes
function downloadFiles() {

  // This callback will be called when file list is available
  const callback = function(error, data) {

    if (error) {
      console.error(error);
    } else {

      const resourceIds = data.data.map(resource => 'id:' + resource.id);

      // When download completes call callback function that saves a file
      const downloadCallback = function(error, data, response) {

        // Write downloaded files to the archive
        fs.writeFile(path.resolve("./files/download-csv-sample.zip"), response.body, function(error) {
          if (error) {
            console.error(error);
          }

          console.log("Download completed to ./files/download-csv-sample.zip");
        });

        if (error) {
          console.error(error);
        }
      };

      // Call download API method
      api.download(evApiKey, evAccessToken, resourceIds, {}, downloadCallback);
    }
  };

  // List all csv files in the folder
  api.listResources(
    evApiKey,
    evAccessToken,
    "/api-sample-code",
    {
      // Get only CSV files
      'name': '*.csv',
      // Higher limit can be used when needed
      'limit': 100
    },
    callback
  );
}