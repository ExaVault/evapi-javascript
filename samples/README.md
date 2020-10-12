# ExaVault API Code Samples

There are a couple steps need to be completed to run the code samples.

- Node.js should be installed in the system. Code was tested on version 10 and higher. Therefore we suggest version 10+.
- Then install all dependencies by running `npm install` from the project root.
- For a code sample to run it should be configured with access token, api key and account name. 
This should be done by creating `.env` file in the [samples](../samples) directory, which should include 3 variables:
EV_API_KEY, EV_ACCESS_TOKEN and EV_ACCOUNT_NAME. See [`.env.example`](./.env.example) as an example.
- When the previous steps is done a sample code can be executed with the following command: `node get-account.js` (replace `get-account.js` by any other sample code's file you want to execute). 

Important note here is that command should be executed from the `samples` directory. This is because `dotenv` package used in the code samples is looking for `.env` file in the current directory by default.
If you unable to execute the code from the current directory, you can change default path by changing `dotenv`'s default setup. Read more [here](https://www.npmjs.com/package/dotenv#path).
    