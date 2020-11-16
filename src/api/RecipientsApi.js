'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ExaVault API
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See our API reference documentation at https://www.exavault.com/developer/api-docs/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Contact: support@exavault.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Body = require('../model/Body18');

var _Body2 = _interopRequireDefault(_Body);

var _ShareRecipientsResponse = require('../model/ShareRecipientsResponse');

var _ShareRecipientsResponse2 = _interopRequireDefault(_ShareRecipientsResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Recipients service.
* @module api/RecipientsApi
* @version 2.2.1
*/
var RecipientsApi = function () {

  /**
  * Constructs a new RecipientsApi. 
  * @alias module:api/RecipientsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RecipientsApi(apiClient) {
    _classCallCheck(this, RecipientsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the resendInvitationsForShare operation.
   * @callback module:api/RecipientsApi~resendInvitationsForShareCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ShareRecipientsResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Resend invitations to share recipients
   * Resend invitations to one or all recipients attached to specified share. The most recent message that was sent for the share will be re-used for this email.  You can use [GET /shares/{id}](#operation/getShareById) to view the recipient list and message history for a share. Use [PATCH /shares/{id}](#operation/updateShareById) to add or remove recipients.
   * @param {Object} opts Optional parameters
   * @param {module:api/RecipientsApi~resendInvitationsForShareCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ShareRecipientsResponse}
   */


  _createClass(RecipientsApi, [{
    key: 'resendInvitationsForShare',
    value: function resendInvitationsForShare(evApiKey, evAccessToken, shareId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {
        'shareId': shareId
      };
      var queryParams = {};
      var headerParams = {
        'ev-api-key': evApiKey,
        'ev-access-token': evAccessToken
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ShareRecipientsResponse2.default;

      return this.apiClient.callApi('/recipients/shares/invites/{shareId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return RecipientsApi;
}();

exports.default = RecipientsApi;