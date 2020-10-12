// Load environment variables from .env file
require('dotenv').config();

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

function addUserCallback(error) {
  if (error) {
    console.error(error);
  } else {
    console.log('User has been created');
  }
}

// Call API method to add new user to the account
api.addUser(
  evApiKey,
  evAccessToken,
  // Passing object with user settings in the request body
  {
    'body': {
      email: "testuser@example.com",
      password: "testpassword",
      homeResource: "/",
      permissions: {
        "download": true,
        "upload": true,
        "modify": true,
        "list": false,
        "delete": true,
        "changePassword": false,
        "share": false
      },
      role: "user",
      timeZone: "UTC",
      username: "testuser",
      welcomeEmail: true
    }
  },
  addUserCallback
);