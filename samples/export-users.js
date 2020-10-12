// Load environment variables from .env file
require('dotenv').config();
const path = require('path');
const fs = require('fs');
const csvStringify  = require("csv-stringify/lib/sync");

const ExaVaultApi = require('../src/index');

// Create api object instance. Account name specified by using corresponding environment variable (EV_ACCOUNT_NAME)
const api = new ExaVaultApi.UsersApi(
  new ExaVaultApi.ApiClient({
    'accountname': process.env.EV_ACCOUNT_NAME
  })
);

// Use environment variables for api key (EV_API_KEY) and access token (EV_ACCESS_TOKEN) which are required for calling ExaVault API
const evApiKey = process.env.EV_API_KEY;
const evAccessToken = process.env.EV_ACCESS_TOKEN;

// Results returned in api one call
const resultLimit = 50;
let offset = 0;
let users = [];

// User list callback
function listUsersCallback(error, data) {

  if (error) {
    console.error(error);
  } else {

    // Append users chunk to the main user array
    users = users.concat(data.data);

    // Continue calling api method for user list if we didn't get the full list yet
    if (data.totalResults > data.returnedResults + offset) {
      offset += resultLimit;

      api.listUsers(
        evApiKey,
        evAccessToken,
        {
          limit: resultLimit,
          offset: offset
        },
        listUsersCallback
      );
    } else {

      let csvData = [];

      // If user list is not empty, then prepare data for csv formatter and write to a file
      if (users.length > 0) {

        let permissions = Object.assign({}, users[0].attributes.permissions);
        let attributes = Object.assign({}, users[0].attributes);
        delete attributes.permissions;

        csvData.push(['id'].concat(Object.keys(attributes), Object.keys(permissions)));

        csvData = csvData.concat(users.map(
          user => {
            let permissions = Object.assign({}, user.attributes.permissions);
            let attributes = Object.assign({}, user.attributes);
            delete attributes.permissions;
            return [user.id].concat(Object.values(attributes), Object.values(permissions))
          }
        ));
      }

      const csvOutput = csvStringify(csvData);

      // Write user list to a file
      fs.writeFile(path.resolve('./files/users-export.csv'), csvOutput, function(error) {
        if (error) {
          console.error(error);
        }

        console.log("Users successfully exported to ./files/users-export.csv");
      })
    }
  }
}

// Call api method to get all users in the account
api.listUsers(
  evApiKey,
  evAccessToken,
  {
    limit: resultLimit,
    offset: offset
  },
  listUsersCallback
);

