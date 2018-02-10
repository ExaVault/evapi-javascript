var ExaVaultApi = require('exa_vault_api');

var authenticationApi = new ExaVaultApi.AuthenticationApi();

var apiKey = 'your_api_key_goe_here'; 
var username = 'existing_username_goes_here';
var password = 'user_password_goes_here'; 

var opts = { 
  'username': username,
  'password': password
};

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

    var opts = { 
      'access_token': accessToken,
      'folderName': folderName,
      'path': path
    };

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

    filesFoldersApi.createFolder(apiKey, opts, callback);

  }
};

authenticationApi.authenticateUser(apiKey, opts, callback);
