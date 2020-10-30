# ExaVault JavaScript API Library - v2.0

## Introduction
Welcome to ExaVault's JavaScript code library for our v2 API. Our v2 API will allow you to interact with all aspects of the service the same way our web portal would. The library is generated from our API's [public swagger YAML file](https://www.exavault.com/api/docs/evapi_2.0_public.yaml)

## Requirements

To use this library [Node.js](https://nodejs.org/) should be installed in the system. We recommend using version 10 or higher.

You will also need an [ExaVault](https://www.exavault.com) account, as well as an API key and access token.

## Installation

There are two installation options:

#### 1. Install from npm registry (recommended)
#

```shell
npm install @exavault/exavault-api --save
```

#### 2. Install from Github (use this when you cannot install from npm registry)
#

```shell
npm install ExaVault/evapi-javascript --save
```

#### 3. Download zip archive with code
#

- Go to ExaVault JavaScript API library [homepage](https://github.com/ExaVault/evapi-javascript).

- Click on *Code -> Download* and you will get an archive with code, which you need to unarchive to your destination folder.

- Then go to the folder with library and run the following command to install all dependencies:

```
npm install
```

Now you're ready to include the library to your code and start making calls to the ExaVault API.

**Installation notes:**

Sucessful dependencies installation with `npm install` will output info about installed packages:

```bash
added 380 packages from 566 contributors and audited 380 packages in 11.617s
```

There can be additional output about packages vulnerabilities:

```
17 packages are looking for funding
  run `npm fund` for details

found 5 vulnerabilities (3 low, 1 high, 1 critical)
  run `npm audit fix` to fix them, or `npm audit` for details
```

Usually you'd see this when some dependent packages have known security issues. They don't break code, but you can try fixing this by running `npm audit fix`. However, some vulnerabilities require manual fixing. Please, let us know if you'll find something that needs our attention. You can post an issue here https://github.com/ExaVault/evapi-javascript/issues or write us to support@exavault.com.

## Sample Code

For a gentle introduction to using JavaScript code with ExaVault's API, check out [our code samples](https://github.com/ExaVault/evapi-javascript-samples). Follow the instructions in that repository's README to run the sample scripts, which will demonstrate how to use JavaScript Library to interact with your ExaVault account.

## Writing Your Own Code

After you have completed the installation steps above, you're all set to write your own code.
Here is an example of how to get your account information from the API.

```javascript
const ExaVaultApi = require('@exavault/exavault-api');

const evApiKey = "evApiKey_example";
const evAccessToken = "evAccessToken_example";

// Create api object instance with account name configuration
// Note that we must provide an accountname to the API
const api = new ExaVaultApi.AccountApi(
  new ExaVaultApi.ApiClient({
    "accountname": "accountname-example"
  })
);

// Process response data from the API
const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};

// Make a call to ExaVault API to get account data
api.getAccount(evApiKey, evAccessToken, {}, function(error, data) {
    // Use `data` argument to access response data
    // Use `error` argument to access any errors
});
```

If you'd like to see this done in sample code, please take a look at [our code samples](https://github.com/ExaVault/evapi-javascript-samples)

## Author

support@exavault.com
