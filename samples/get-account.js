require('dotenv').config();

const ExaVaultApi = require('../src/index');

// Create api object instance. Account name specified by using corresponding environment variable (EV_ACCOUNT_NAME)
const api = new ExaVaultApi.AccountApi(
  new ExaVaultApi.ApiClient({
    'accountname': process.env.EV_ACCOUNT_NAME
  })
);

// Use environment variables for api key (EV_API_KEY) and access token (EV_ACCESS_TOKEN) which are required for calling ExaVault API
const evApiKey = process.env.EV_API_KEY;
const evAccessToken = process.env.EV_ACCESS_TOKEN;

const callback = function(error, data) {
  if (error) {
    console.error(error);
  } else {
    // Calculate account usage in gigabytes
    const quota = data.data.attributes.quota;
    const gbFactor = 1024 * 1024 * 1024;
    const gbUsed = quota.diskUsed / gbFactor;
    const gbTotal = quota.diskLimit / gbFactor;
    const percentUsed = gbUsed / gbTotal * 100;

    console.log("Account used: " + (Math.round(gbUsed * 10) / 10) + "GB (" + (Math.round(percentUsed * 10) / 10) + "%)");
    console.log("Total size: " + (Math.round(gbTotal * 10) / 10) + "GB");
  }
};

// Make an api call with api key and access token
api.getAccount(evApiKey, evAccessToken, {}, callback);