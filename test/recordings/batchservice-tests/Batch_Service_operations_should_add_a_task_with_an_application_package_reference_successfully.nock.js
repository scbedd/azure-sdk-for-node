// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test3';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test3.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2018-12-01.8.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 11 Dec 2018 18:48:34 GMT',
  etag: '0x8D65F994130DD32',
  location: 'https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1fd4c185-74b7-4fa5-ac7a-17076272d11a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  date: 'Tue, 11 Dec 2018 18:48:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2018-12-01.8.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 11 Dec 2018 18:48:34 GMT',
  etag: '0x8D65F994130DD32',
  location: 'https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1fd4c185-74b7-4fa5-ac7a-17076272d11a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  date: 'Tue, 11 Dec 2018 18:48:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask?api-version=2018-12-01.8.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"ApplicationPacakgeReferenceTask\",\"url\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask\",\"eTag\":\"0x8D65F994130DD32\",\"creationTime\":\"2018-12-11T18:48:34.7860274Z\",\"lastModified\":\"2018-12-11T18:48:34.7860274Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-12-11T18:48:34.7860274Z\",\"commandLine\":\"cmd /c echo hello world\",\"applicationPackageReferences\":[\r\n    {\r\n      \"applicationId\":\"my_application_id\"\r\n    }\r\n  ],\"userIdentity\":{\r\n    \"autoUser\":{\r\n      \"elevationLevel\":\"nonadmin\"\r\n    }\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P7D\",\"maxTaskRetryCount\":3\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Tue, 11 Dec 2018 18:48:34 GMT',
  etag: '0x8D65F994130DD32',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9dc264e5-d0dd-4bb2-b185-018c0b5e9a26',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:48:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask?api-version=2018-12-01.8.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"ApplicationPacakgeReferenceTask\",\"url\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask\",\"eTag\":\"0x8D65F994130DD32\",\"creationTime\":\"2018-12-11T18:48:34.7860274Z\",\"lastModified\":\"2018-12-11T18:48:34.7860274Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-12-11T18:48:34.7860274Z\",\"commandLine\":\"cmd /c echo hello world\",\"applicationPackageReferences\":[\r\n    {\r\n      \"applicationId\":\"my_application_id\"\r\n    }\r\n  ],\"userIdentity\":{\r\n    \"autoUser\":{\r\n      \"elevationLevel\":\"nonadmin\"\r\n    }\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P7D\",\"maxTaskRetryCount\":3\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Tue, 11 Dec 2018 18:48:34 GMT',
  etag: '0x8D65F994130DD32',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9dc264e5-d0dd-4bb2-b185-018c0b5e9a26',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:48:34 GMT',
  connection: 'close' });
 return result; }]];