// Load environment variables from .env file
require('dotenv').config();
const path = require('path');
const fs = require('fs');

const ExaVaultApi = require('../src/index');

// Create API object instances. Account name specified by using corresponding environment variable (EV_ACCOUNT_NAME)
const resourcesApi = new ExaVaultApi.ResourcesApi(
  new ExaVaultApi.ApiClient({
    'accountname': process.env.EV_ACCOUNT_NAME
  })
);

const notificationsApi = new ExaVaultApi.NotificationsApi(
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

    function addNotificationCallback(error, data) {
      if (error) {
        console.error(error);
      } else {
        console.log("Notification has been created");
      }
    }

    // Make an API call that creates a notification for every upload event in the folder;
    // custom message will be send to a set of emails
    notificationsApi.addNotification(
      evApiKey,
      evAccessToken,
      {
        'body': {
          'resource': "id:" + resourceId,
          'usernames': ["notice_user_all"],
          'action': 'upload',
          'type': 'folder',
          'message': 'New files have been uploaded',
          'sendEmail': true,
          'recipients': [
            'testnotifications@example.com',
            'testnotifications1@example.com',
            'testnotifications2@example.com',
          ]
        }
      },
      addNotificationCallback
    );
  }
}

// First we create a folder for the new notification
resourcesApi.addFolder(
  evApiKey,
  evAccessToken,
  {
    'body': {
      'path': '/api-sample-code/notification-sample',
    }
  },
  addFolderCallback
);