// Load environment variables from .env file
require('dotenv').config();

const ExaVaultApi = require('../src/index');

// Create API object instances. Account name specified by using corresponding environment variable (EV_ACCOUNT_NAME)
const resourcesApi = new ExaVaultApi.ResourcesApi(
  new ExaVaultApi.ApiClient({
    'accountname': process.env.EV_ACCOUNT_NAME
  })
);

const sharesApi = new ExaVaultApi.SharesApi(
  new ExaVaultApi.ApiClient({
    'accountname': process.env.EV_ACCOUNT_NAME
  })
);

// Use environment variables for api key (EV_API_KEY) and access token (EV_ACCESS_TOKEN) which are required for calling ExaVault API
const evApiKey = process.env.EV_API_KEY;
const evAccessToken = process.env.EV_ACCESS_TOKEN;

// When folder created this callback will be called
function addFolderCallback(error, data) {
  if (error) {
    console.error(error);
  } else {

    const resourceId = data.data.id;

    function addShareCallback(error, data) {
      if (error) {
        console.error(error);
      } else {
        console.log("Folder has been shared");
      }
    }

    // Make an API call that creates shared folder
    sharesApi.addShare(
      evApiKey,
      evAccessToken,
      {
        'body': {
          "type": "shared_folder",
          "name": "test sfdsdfs",
          "resources": ["id:" + resourceId],
          "password": "testpassword"
        }
      },
      addShareCallback
    );
  }
}

// First we create a folder to be shared after
resourcesApi.addFolder(
  evApiKey,
  evAccessToken,
  {
    'body': {
      'path': '/api-sample-code/share-sample',
    }
  },
  addFolderCallback
);