/**
 * ExaVault API
 * # Introduction  Welcome to the ExaVault API documentation. Our API lets you control nearly all aspects of your ExaVault account programatically, from uploading and downloading files to creating and managing shares and notifications. Our API supports both GET and POST operations.  Capabilities of the API include:  - Uploading and downloading files. - Managing files and folders; including standard operations like move, copy and delete. - Getting information about activity occuring in your account. - Creating, updating and deleting users. - Creating and managing shares, including download-only shares and recieve folders.  - Setting up and managing notifications.  ## The API Endpoint  The ExaVault API is located at: https://api.exavault.com/v1.2/  # Testing w/ Postman  We've made it easy for you to test our API before you start full-scale development. Download [Postman](https://www.getpostman.com/) or the [Postman Chrome Extension](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en), and then download our Postman collection, below. [Obtain your API key](#section/Code-Libraries-and-Sample-PHP-Code/Obtain-your-API-key) and you'll be able to interact with your ExaVault account immediately, so you can better understand what the capabilities of the API are.  <div class=\"postman-run-button\" data-postman-action=\"collection/import\" data-postman-var-1=\"e13395afc6278ce1555f\"></div>  ![ExaVault API Postman Colletion Usage](/images/postman.png)  If you'd prefer to skip Postman and start working with code directly, take a look at the sample code below.    # Code Libraries & Sample PHP Code  Once you're ready for full-scale development, we recommend looking at our code libraries available on [GitHub](https://github.com/ExaVault). We offer code libraries for [Python](https://github.com/ExaVault/evapi-python), [PHP](https://github.com/ExaVault/evapi-php) and [JavaScript](https://github.com/ExaVault/evapi-javascript).  While we recommend using our libraries, you're welcome to interact directly with our API via HTTP GET and POST requests -- a great option particularly if you're developing in a language for which we don't yet have sample code.     - [Download Python Library &amp; Sample Code &raquo;](https://github.com/ExaVault/evapi-python) - [Download PHP Library &amp; Sample Code &raquo;](https://github.com/ExaVault/evapi-php) - [Download JavaScript Library &amp; Sample Code &raquo;](https://github.com/ExaVault/evapi-javascript)  *Note: You can generate client libraries for any language using [Swagger Editor](http://editor2.swagger.io/). Just download our documentation file, past it into editor and use 'Generate Client' dropdown.*  ## Obtain Your API Key  You will need to obtain an API key for your application from the [Client Area](https://clients.exavault.com/clientarea.php?action=products) of your account.  To obtain an API key, please follow the instructions below.   + Login to the [Accounts](https://clients.exavault.com/clientarea.php?action=products) section of the Client Area.  + Use the drop down next to your desired account, and select *Manage API Keys*.  + You will be brought to the API Key management screen. Fill out the form and save to generate a new key for your app.  *NOTE: As of Oct 2017, we are in the progress of migrating customers to our next generation platform. If your account is already on our new platform, you should log into your File Manager and create your API key under Account->Developer->Manage API Keys*.  # Status Codes  The ExaVault API returns only two HTTP status codes for its responses: 200 and 500.  When the request could be successfully processed by the endpoint, the response status code will be 200, regardless of whether the requested action could be taken.  For example, the response to a getUser request for a username that does not exist in your account would have the status of 200,  indicating that the response was received and processed, but the error member of the returned response object would contain object with `message` and `code` properties.  **Result Format:**  |Success   | Error     | Results   | | ---      | :---:       |  :---:      | | 0        |  `Object` |   Empty   | | 1        |   Empty       |    `Object` or `Array`        |     When a malformed request is received, a 500 HTTP status code will be returned, indicating that the request could not be processed.  ExaVault's API does not currently support traditional REST response codes such as '201 Created' or '405 Method Not Allowed', although we intend to support such codes a future version of the API.   # File Paths  Many API calls require you to provide one or more file paths. For example, the <a href=\"#operation/moveResources\">moveResources</a> call requires both an array of source paths, **filePaths**, and a destination path, **destinationPath**. Here's a few tips for working with paths:   - File paths should always be specified as a string, using the standard Unix format: e.g. `/path/to/a/file.txt`  - File paths are always absolute _from the home directory of the logged in user_. For example, if the user **bob** had a home directory restriction of `/bob_home`, then an API call made using his login would specify a file as `/myfile.txt`, whereas an API call made using the master user ( no home directory restriction ) would specify the same file as `/bob_home/myfile.txt`.  # API Rate Limits  We rate limit the number of API calls you can make to help prevent abuse and protect system stablity. Each API key will support 500 requests per rolling five minutes. If you make more than 500 requests in a five minute period, you will receive a response with an error object for fifteen minutes.  # Webhooks  A webhook is an HTTP callback: a simple event-notification via HTTP POST. If you define webhooks for Exavault, ExaVault will POST a  message to a URL when certain things happen.     Webhooks can be used to receive a JSON object to your endpoint URL. You choose what events will trigger webhook messages to your endpoint URL.     Webhooks will attempt to send a message up to 8 times with increasing timeouts between each attempt. All webhook requests are tracked in the webhooks log.  ## Getting Started  1. Go to the Account tab inside SWFT.  2. Choose the Developer tab.  3. Configure your endpoint URL and select the events you want to trigger webhook messages.  4. Save settings.    You are all set to receive webhook callbacks on the events you selected.  ## Verification Signature  ExaVault includes a custom HTTP header, X-Exavault-Signature, with webhooks POST requests which will contain the signature for the request.  You can use the signature to verify the request for an additional level of security.  ## Generating the Signature  1. Go to Account tab inside SWFT.  2. Choose the Developer tab.  3. Obtain the verification token. This field will only be shown if you've configured your endpoint URL.  4. In your code that receives or processes the webhooks, you should concatenate the verification token with the JSON object that we sent in our      POST request and hash it with md5.     ```     md5($verificationToken.$webhooksObject);     ```  5. Compare signature that you generated to the signature provided in the X-Exavault-Signature HTTP header  ## Example JSON Response Object  ```json   {     \"accountname\": \"mycompanyname\",     \"username\": \"john\"     \"operation\": \"Upload\",     \"protocol\": \"https\",     \"path\": \"/testfolder/filename.jpg\"     \"attempt\": 1   } ```  ## Webhooks Logs  Keep track of all your webhooks requests in the Activity section of your account. You can find the following info for each request:    1. date and time - timestamp of the request.    2. endpoint url - where the webhook was sent.    3. event - what triggered the webhook.    4. status - HTTP status or curl error code.    5. attempt - how many times we tried to send this request.    6. response size - size of the response from your server.    7. details - you can check the response body if it was sent. 
 *
 * OpenAPI spec version: 1.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Account', 'model/AccountResponse', 'model/Auth', 'model/AuthResponse', 'model/AvailableUser', 'model/AvailableUserResponse', 'model/CallbackSettings', 'model/DeletedResource', 'model/DeletedResourcesResponse', 'model/DirectFile', 'model/Error', 'model/ExistingResource', 'model/ExistingResourcesResponse', 'model/LogEntry', 'model/LogResponse', 'model/Message', 'model/ModifiedResource', 'model/ModifiedResourcesResponse', 'model/Notification', 'model/NotificationActivityResponse', 'model/NotificationMessage', 'model/NotificationRecipient', 'model/NotificationResponse', 'model/NotificationsResponse', 'model/PreviewFile', 'model/PreviewFileResponse', 'model/Resource', 'model/ResourcePropertiesResponse', 'model/ResourceProperty', 'model/ResourceResponse', 'model/Response', 'model/Share', 'model/ShareActivityResponse', 'model/ShareLogEntry', 'model/ShareRecipient', 'model/ShareResponse', 'model/SharesResponse', 'model/UpdateNotification', 'model/Url', 'model/UrlResponse', 'model/User', 'model/UserResponse', 'model/UsersResponse', 'api/ActivityApi', 'api/AuthenticationApi', 'api/FilesAndFoldersApi', 'api/NotificationApi', 'api/ShareApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Account'), require('./model/AccountResponse'), require('./model/Auth'), require('./model/AuthResponse'), require('./model/AvailableUser'), require('./model/AvailableUserResponse'), require('./model/CallbackSettings'), require('./model/DeletedResource'), require('./model/DeletedResourcesResponse'), require('./model/DirectFile'), require('./model/Error'), require('./model/ExistingResource'), require('./model/ExistingResourcesResponse'), require('./model/LogEntry'), require('./model/LogResponse'), require('./model/Message'), require('./model/ModifiedResource'), require('./model/ModifiedResourcesResponse'), require('./model/Notification'), require('./model/NotificationActivityResponse'), require('./model/NotificationMessage'), require('./model/NotificationRecipient'), require('./model/NotificationResponse'), require('./model/NotificationsResponse'), require('./model/PreviewFile'), require('./model/PreviewFileResponse'), require('./model/Resource'), require('./model/ResourcePropertiesResponse'), require('./model/ResourceProperty'), require('./model/ResourceResponse'), require('./model/Response'), require('./model/Share'), require('./model/ShareActivityResponse'), require('./model/ShareLogEntry'), require('./model/ShareRecipient'), require('./model/ShareResponse'), require('./model/SharesResponse'), require('./model/UpdateNotification'), require('./model/Url'), require('./model/UrlResponse'), require('./model/User'), require('./model/UserResponse'), require('./model/UsersResponse'), require('./api/ActivityApi'), require('./api/AuthenticationApi'), require('./api/FilesAndFoldersApi'), require('./api/NotificationApi'), require('./api/ShareApi'), require('./api/UserApi'));
  }
}(function(ApiClient, Account, AccountResponse, Auth, AuthResponse, AvailableUser, AvailableUserResponse, CallbackSettings, DeletedResource, DeletedResourcesResponse, DirectFile, Error, ExistingResource, ExistingResourcesResponse, LogEntry, LogResponse, Message, ModifiedResource, ModifiedResourcesResponse, Notification, NotificationActivityResponse, NotificationMessage, NotificationRecipient, NotificationResponse, NotificationsResponse, PreviewFile, PreviewFileResponse, Resource, ResourcePropertiesResponse, ResourceProperty, ResourceResponse, Response, Share, ShareActivityResponse, ShareLogEntry, ShareRecipient, ShareResponse, SharesResponse, UpdateNotification, Url, UrlResponse, User, UserResponse, UsersResponse, ActivityApi, AuthenticationApi, FilesAndFoldersApi, NotificationApi, ShareApi, UserApi) {
  'use strict';

  /**
   * _IntroductionWelcome_to_the_ExaVault_API_documentation__Our_API_lets_you_control_nearly_all_aspects_of_your_ExaVault_account_programatically_from_uploading_and_downloading_files_to_creating_and_managing_shares_and_notifications__Our_API_supports_both_GET_and_POST_operations_Capabilities_of_the_API_include__Uploading_and_downloading_files___Managing_files_and_folders_including_standard_operations_like_move_copy_and_delete___Getting_information_about_activity_occuring_in_your_account___Creating_updating_and_deleting_users___Creating_and_managing_shares_including_download_only_shares_and_recieve_folders____Setting_up_and_managing_notifications__The_API_EndpointThe_ExaVault_API_is_located_at_httpsapi_exavault_comv1_Testing_w_PostmanWeve_made_it_easy_for_you_to_test_our_API_before_you_start_full_scale_development__Download__Postman_httpswww_getpostman_com_or_the__Postman_Chrome_Extension_httpschrome_google_comwebstoredetailpostmanfhbjgbiflinjbdggehcddcbncdddomophlen_and_then_download_our_Postman_collection_below___Obtain_your_API_key_sectionCode_Libraries_and_Sample_PHP_CodeObtain_your_API_key_and_youll_be_able_to_interact_with_your_ExaVault_account_immediately_so_you_can_better_understand_what_the_capabilities_of_the_API_are_div_classpostman_run_buttondata_postman_actioncollectionimportdata_postman_var_1e13395afc6278ce1555fdiv_ExaVault_API_Postman_Colletion_Usage_imagespostman_pngIf_youd_prefer_to_skip_Postman_and_start_working_with_code_directly_take_a_look_at_the_sample_code_below___Code_Libraries__Sample_PHP_CodeOnce_youre_ready_for_full_scale_development_we_recommend_looking_at_our_code_libraries_available_on__GitHub_httpsgithub_comExaVault__We_offer_code_libraries_for__Python_httpsgithub_comExaVaultevapi_python__PHP_httpsgithub_comExaVaultevapi_php_and__JavaScript_httpsgithub_comExaVaultevapi_javascript_While_we_recommend_using_our_libraries_youre_welcome_to_interact_directly_with_our_API_via_HTTP_GET_and_POST_requests____a_great_option_particularly_if_youre_developing_in_a_language_for_which_we_dont_yet_have_sample_code_______Download_Python_Library_amp_Sample_Code_raquo_httpsgithub_comExaVaultevapi_python___Download_PHP_Library_amp_Sample_Code_raquo_httpsgithub_comExaVaultevapi_php___Download_JavaScript_Library_amp_Sample_Code_raquo_httpsgithub_comExaVaultevapi_javascriptNote_You_can_generate_client_libraries_for_any_language_using__Swagger_Editor_httpeditor2_swagger_io__Just_download_our_documentation_file_past_it_into_editor_and_use_Generate_Client_dropdown__Obtain_Your_API_KeyYou_will_need_to_obtain_an_API_key_for_your_application_from_the__Client_Area_httpsclients_exavault_comclientarea_phpactionproducts_of_your_account___Toobtain_an_API_key_please_follow_the_instructions_below___Login_to_the__Accounts_httpsclients_exavault_comclientarea_phpactionproducts_section_of_the_Client_Area___Use_the_drop_down_next_to_your_desired_account_and_select_Manage_API_Keys___You_will_be_brought_to_the_API_Key_management_screen__Fill_out_the_form_and_save_to_generate_a_new_key_for_your_app_NOTE_As_of_Oct_2017_we_are_in_the_progress_of_migrating_customers_to_our_next_generation_platform__If_your_account_is_already_on_our_new_platform_you_should_log_into_your_File_Manager_and_create_your_API_key_under_Account_Developer_Manage_API_Keys__Status_CodesThe_ExaVault_API_returns_only_two_HTTP_status_codes_for_its_responses_200_and_500__When_the_request_could_be_successfully_processed_by_the_endpoint_the_response_status_code_will_be_200_regardless_of_whether_the_requested_action_could_be_taken_For_example_the_response_to_a_getUser_request_for_a_username_that_does_not_exist_in_your_account_would_have_the_status_of_200_indicating_that_the_response_was_received_and_processed_but_the_error_member_of_the_returned_response_object_would_contain_object_with_message_and_code_properties_Result_FormatSuccess____Error______Results____________________________________0__________Object____Empty____1___________Empty___________Object_or_Array___________When_a_malformed_request_is_received_a_500_HTTP_status_code_will_be_returned_indicating_that_the_request_could_not_be_processed_ExaVaults_API_does_not_currently_support_traditional_REST_response_codes_such_as_201_Created_or_405_Method_Not_Allowed_although_we_intend_to_support_such_codes_a_future_version_of_the_API___File_PathsMany_API_calls_require_you_to_provide_one_or_more_file_paths__For_example_the_a_hrefoperationmoveResourcesmoveResourcesa_call_requires_both_an_array_of_source_paths_filePaths_and_a_destination_path_destinationPath__Heres_a_few_tips_for_working_with_paths___File_paths_should_always_be_specified_as_a_string_using_the_standard_Unix_format_e_g__pathtoafile_txt___File_paths_are_always_absolute__from_the_home_directory_of_the_logged_in_user___For_example_if_the_user_bob_had_a_home_directory_restriction_of_bob_home_then_an_API_call_made_using_his_login_would_specify_a_file_as_myfile_txt_whereas_an_API_call_made_using_the_master_user___no_home_directory_restriction__would_specify_the_same_file_as_bob_homemyfile_txt__API_Rate_LimitsWe_rate_limit_the_number_of_API_calls_you_can_make_to_help_prevent_abuse_and_protect_system_stablity__Each_API_key_will_support_500_requests_per_rolling_five_minutes__If_you_make_more_than_500_requests_in_a_five_minute_period_you_will_receive_a_response_with_an_error_object_for_fifteen_minutes__WebhooksA_webhook_is_an_HTTP_callback_a_simple_event_notification_via_HTTP_POST__If_you_define_webhooks_for_Exavault_ExaVault_will_POST_a_message_to_a_URL_when_certain_things_happen_Webhooks_can_be_used_to_receive_a_JSON_object_to_your_endpoint_URL__You_choose_what_events_will_trigger_webhook_messages_to_your_endpoint_URL_Webhooks_will_attempt_to_send_a_message_up_to_8_times_with_increasing_timeouts_between_each_attempt__All_webhook_requests_are_tracked_in_the_webhooks_log__Getting_Started1__Go_to_the_Account_tab_inside_SWFT_2__Choose_the_Developer_tab_3__Configure_your_endpoint_URL_and_select_the_events_you_want_to_trigger_webhook_messages_4__Save_settings_You_are_all_set_to_receive_webhook_callbacks_on_the_events_you_selected__Verification_SignatureExaVault_includes_a_custom_HTTP_header_X_Exavault_Signature_with_webhooks_POST_requests_which_will_contain_the_signature_for_the_request__You_can_use_the_signature_to_verify_the_request_for_an_additional_level_of_security__Generating_the_Signature1__Go_to_Account_tab_inside_SWFT_2__Choose_the_Developer_tab_3__Obtain_the_verification_token__This_field_will_only_be_shown_if_youve_configured_your_endpoint_URL_4__In_your_code_that_receives_or_processes_the_webhooks_you_should_concatenate_the_verification_token_with_the_JSON_object_that_we_sent_in_our_____POST_request_and_hash_it_with_md5_________md5_verificationToken_webhooksObject____5__Compare_signature_that_you_generated_to_the_signature_provided_in_the_X_Exavault_Signature_HTTP_header_Example_JSON_Response_Objectjson______accountname_mycompanyname____username_john____operation_Upload____protocol_https____path_testfolderfilename_jpg____attempt_1___Webhooks_LogsKeep_track_of_all_your_webhooks_requests_in_the_Activity_section_of_your_account_You_can_find_the_following_info_for_each_request__1__date_and_time___timestamp_of_the_request___2__endpoint_url___where_the_webhook_was_sent___3__event___what_triggered_the_webhook___4__status___HTTP_status_or_curl_error_code___5__attempt___how_many_times_we_tried_to_send_this_request___6__response_size___size_of_the_response_from_your_server___7__details___you_can_check_the_response_body_if_it_was_sent_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ExaVaultApi = require('index'); // See note below*.
   * var xxxSvc = new ExaVaultApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ExaVaultApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ExaVaultApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ExaVaultApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account: Account,
    /**
     * The AccountResponse model constructor.
     * @property {module:model/AccountResponse}
     */
    AccountResponse: AccountResponse,
    /**
     * The Auth model constructor.
     * @property {module:model/Auth}
     */
    Auth: Auth,
    /**
     * The AuthResponse model constructor.
     * @property {module:model/AuthResponse}
     */
    AuthResponse: AuthResponse,
    /**
     * The AvailableUser model constructor.
     * @property {module:model/AvailableUser}
     */
    AvailableUser: AvailableUser,
    /**
     * The AvailableUserResponse model constructor.
     * @property {module:model/AvailableUserResponse}
     */
    AvailableUserResponse: AvailableUserResponse,
    /**
     * The CallbackSettings model constructor.
     * @property {module:model/CallbackSettings}
     */
    CallbackSettings: CallbackSettings,
    /**
     * The DeletedResource model constructor.
     * @property {module:model/DeletedResource}
     */
    DeletedResource: DeletedResource,
    /**
     * The DeletedResourcesResponse model constructor.
     * @property {module:model/DeletedResourcesResponse}
     */
    DeletedResourcesResponse: DeletedResourcesResponse,
    /**
     * The DirectFile model constructor.
     * @property {module:model/DirectFile}
     */
    DirectFile: DirectFile,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ExistingResource model constructor.
     * @property {module:model/ExistingResource}
     */
    ExistingResource: ExistingResource,
    /**
     * The ExistingResourcesResponse model constructor.
     * @property {module:model/ExistingResourcesResponse}
     */
    ExistingResourcesResponse: ExistingResourcesResponse,
    /**
     * The LogEntry model constructor.
     * @property {module:model/LogEntry}
     */
    LogEntry: LogEntry,
    /**
     * The LogResponse model constructor.
     * @property {module:model/LogResponse}
     */
    LogResponse: LogResponse,
    /**
     * The Message model constructor.
     * @property {module:model/Message}
     */
    Message: Message,
    /**
     * The ModifiedResource model constructor.
     * @property {module:model/ModifiedResource}
     */
    ModifiedResource: ModifiedResource,
    /**
     * The ModifiedResourcesResponse model constructor.
     * @property {module:model/ModifiedResourcesResponse}
     */
    ModifiedResourcesResponse: ModifiedResourcesResponse,
    /**
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification: Notification,
    /**
     * The NotificationActivityResponse model constructor.
     * @property {module:model/NotificationActivityResponse}
     */
    NotificationActivityResponse: NotificationActivityResponse,
    /**
     * The NotificationMessage model constructor.
     * @property {module:model/NotificationMessage}
     */
    NotificationMessage: NotificationMessage,
    /**
     * The NotificationRecipient model constructor.
     * @property {module:model/NotificationRecipient}
     */
    NotificationRecipient: NotificationRecipient,
    /**
     * The NotificationResponse model constructor.
     * @property {module:model/NotificationResponse}
     */
    NotificationResponse: NotificationResponse,
    /**
     * The NotificationsResponse model constructor.
     * @property {module:model/NotificationsResponse}
     */
    NotificationsResponse: NotificationsResponse,
    /**
     * The PreviewFile model constructor.
     * @property {module:model/PreviewFile}
     */
    PreviewFile: PreviewFile,
    /**
     * The PreviewFileResponse model constructor.
     * @property {module:model/PreviewFileResponse}
     */
    PreviewFileResponse: PreviewFileResponse,
    /**
     * The Resource model constructor.
     * @property {module:model/Resource}
     */
    Resource: Resource,
    /**
     * The ResourcePropertiesResponse model constructor.
     * @property {module:model/ResourcePropertiesResponse}
     */
    ResourcePropertiesResponse: ResourcePropertiesResponse,
    /**
     * The ResourceProperty model constructor.
     * @property {module:model/ResourceProperty}
     */
    ResourceProperty: ResourceProperty,
    /**
     * The ResourceResponse model constructor.
     * @property {module:model/ResourceResponse}
     */
    ResourceResponse: ResourceResponse,
    /**
     * The Response model constructor.
     * @property {module:model/Response}
     */
    Response: Response,
    /**
     * The Share model constructor.
     * @property {module:model/Share}
     */
    Share: Share,
    /**
     * The ShareActivityResponse model constructor.
     * @property {module:model/ShareActivityResponse}
     */
    ShareActivityResponse: ShareActivityResponse,
    /**
     * The ShareLogEntry model constructor.
     * @property {module:model/ShareLogEntry}
     */
    ShareLogEntry: ShareLogEntry,
    /**
     * The ShareRecipient model constructor.
     * @property {module:model/ShareRecipient}
     */
    ShareRecipient: ShareRecipient,
    /**
     * The ShareResponse model constructor.
     * @property {module:model/ShareResponse}
     */
    ShareResponse: ShareResponse,
    /**
     * The SharesResponse model constructor.
     * @property {module:model/SharesResponse}
     */
    SharesResponse: SharesResponse,
    /**
     * The UpdateNotification model constructor.
     * @property {module:model/UpdateNotification}
     */
    UpdateNotification: UpdateNotification,
    /**
     * The Url model constructor.
     * @property {module:model/Url}
     */
    Url: Url,
    /**
     * The UrlResponse model constructor.
     * @property {module:model/UrlResponse}
     */
    UrlResponse: UrlResponse,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserResponse model constructor.
     * @property {module:model/UserResponse}
     */
    UserResponse: UserResponse,
    /**
     * The UsersResponse model constructor.
     * @property {module:model/UsersResponse}
     */
    UsersResponse: UsersResponse,
    /**
     * The ActivityApi service constructor.
     * @property {module:api/ActivityApi}
     */
    ActivityApi: ActivityApi,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi,
    /**
     * The FilesAndFoldersApi service constructor.
     * @property {module:api/FilesAndFoldersApi}
     */
    FilesAndFoldersApi: FilesAndFoldersApi,
    /**
     * The NotificationApi service constructor.
     * @property {module:api/NotificationApi}
     */
    NotificationApi: NotificationApi,
    /**
     * The ShareApi service constructor.
     * @property {module:api/ShareApi}
     */
    ShareApi: ShareApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));
