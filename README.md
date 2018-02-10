evapi-javascript
============

evapi-javascript is an API client written in JavaScript for connecting to the
ExaVault API. The ExaVault API is a REST-like API providing operations
for file and user management, and supports both ``POST`` and ``GET``
requests.

To get started using ExaVault's API, you first must have an ExaVault
account and obtain an API key. For more information, please refer to
our [Developer page](https://www.exavault.com/developer/) or contact
support@exavault.com for details.

## Installation

### For Node.js

First install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `evapi-javascript`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `evapi-javascript`:

```shell
npm link
```

Finally, switch to the directory you want to use your exa_vault_api from, and run:

```shell
npm link /path/to/<evapi-javascript>
```

You should now be able to `require('exa_vault_api')` in javascript files from the directory you ran the last 
command above from.

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting started 


You will need to obtain an API key for your application from the [Client Area](https://clients.exavault.com/clientarea.php?action=products) of your account.  To
obtain an API key, please follow the instructions below.

 + Login to the [Accounts](https://clients.exavault.com/clientarea.php?action=products) section of the Client Area.
 + Use the drop down next to your desired account, and select *Manage API Keys*.
 + You will be brought to the API Key management screen. Fill out the form and save to generate a new key for your app.

Once you obtain your API you can use the following snippet. It will allow you to authenticate into API, create folder, get activity logs and log out user from the API.

```javscript
var ExaVaultApi = require('exa_vault_api');

var authenticationApi = new ExaVaultApi.AuthenticationApi();

var apiKey = 'your_api_key_goe_here'; 
var username = 'existing_username_goes_here';
var password = 'user_password_goes_here'; 

var callback = function(error, data, response) {
  if (error) {
    // server error occured
    console.error(error);
  } else {
    var loginSuccess = data.success;

    if (loginSuccess) {
      var accessToken = data.results.accessToken;
    } else {
      // something went wrong check data.error for more details
      console.error(data.error);
      return;
    }

    var filesFoldersApi = new ExaVaultApi.FilesAndFoldersApi();

    var folderName = 'api_test_folder' + Math.floor(Math.random() * 10000);
    var path = '/';

    var callback = function(error, data, response) {
      if (error) {
        // server error occured
        console.error(error);
      } else {

        var createSuccess = data.success;

        if (createSuccess) {
          // Folder created successfully
          console.log('Folder created successfully');

          var activityApi = new ExaVaultApi.ActivityApi();

          var opts = { 
            'offset': 0,
            'sort_by': 'sort_logs_date',
            'sort_order': 'desc'
          };


        var callback = function(error, data, response) {
          if (error) {
            //server error occured
            console.error(error);
          } else {

            var getActivitySuccess = data.success;

            if(getActivitySuccess) {
              // Geat array with log entries
              var activityLogs = data.results;
              console.log(activityLogs);
             } else {
              // something went wrong check data.error for more details
              console.error(data.error);
              return;
            }
            
          }
        };

        activityApi.getFileActivityLogs(apiKey, accessToken, opts, callback);

        } else {
          // something went wrong check data.error for more details
          console.error(data.error);
          return;
        }

      }
    };

    filesFoldersApi.createFolder(apiKey, accessToken, folderName, path, callback);

  }
};

authenticationApi.authenticateUser(apiKey, username, password, callback);
```

You can find list of all API requets here - [ExaVault API Docs](https://www.exavault.com/developer/api-docs/)
