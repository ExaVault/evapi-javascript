# ExaVault JavaScript API Library - v2.0

## Introduction
Welcome to ExaVault's JavaScript code library for our v2 API. Our v2 API will allow you to interact with all aspects of the service the same way our web portal would. The library is generated from our API's [public swagger YAML file](https://www.exavault.com/api/docs/evapi_2.0_public.yaml)

## Requirements

To use this library [Node.js](https://nodejs.org/) should be installed in the system. We recommend using 10 version or higher.

You will also need an [ExaVault](https://www.exavault.com) account, as well as an API key and access token.

## Installation

#### Install from npm registry
#

```shell
npm install @exavault/exavault-api --save
```

#### Install from Github
#

```shell
npm install ExaVault/evapi-javascript --save
```

## Sample Code

For a gentle introduction to using JavaScript code with ExaVault's API, check out [our code samples](https://github.com/ExaVault/evapi-javascript-samples). Follow the instructions in that repository's README to run the sample scripts, which will demonstrate how to use JavaScript Library to interact with your ExaVault account.

## Writing Your Own Code

After you completed installation instructions, you're good to write your own code.
Here is an example of how to get your account information from the API.

```javascript
const ExaVaultApi = require('@exavault/exavault-api');

const evApiKey = "evApiKey_example";
const evAccessToken = "evAccessToken_example";

// Create api object instance with account name configuration
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
api.getAccount(evApiKey, evAccessToken, callback);
```

## Author

support@exavault.com
