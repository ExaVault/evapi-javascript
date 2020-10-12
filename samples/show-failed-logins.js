// Load environment variables from .env file
require('dotenv').config();

const moment = require('moment');

const ExaVaultApi = require('../src/index');

// Create API object instance. Account name specified by using corresponding environment variable (EV_ACCOUNT_NAME)
const activityApi = new ExaVaultApi.ActivityApi(
  new ExaVaultApi.ApiClient({
    'accountname': process.env.EV_ACCOUNT_NAME
  })
);

// Use environment variables for api key (EV_API_KEY) and access token (EV_ACCESS_TOKEN) which are required for calling ExaVault API
const evApiKey = process.env.EV_API_KEY;
const evAccessToken = process.env.EV_ACCESS_TOKEN;

// Process and display retrieved data
function activityCallback(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log('List of failed logins:');

    // Extract only failed login and get only usernames and dates
    const tabularData = data.data.filter(
      item => item.attributes.status === "failed"
    ).map(item => {
      return [item.attributes.username, moment(item.attributes.created).format("YYYY-MM-DD HH:mm:ss")];
    });

    console.table(tabularData);
  }
}

const now = moment();
const dayBefore = now.clone().subtract(1, 'd');

// Call API method to get activity records
activityApi.getSessionLogs(
  evApiKey,
  evAccessToken,
  {
    // Filter by activity type. 'PASS' is login type
    'type': 'PASS',
    // Filter out last 24 hours of records
    'endDate': now.format('YYYY-MM-DD HH:mm:ss'),
    'startDate': dayBefore.format('YYYY-MM-DD HH:mm:ss'),
    // Results limited to 100 records and can be expanded if needed
    'limit': 100
  },
  activityCallback
);