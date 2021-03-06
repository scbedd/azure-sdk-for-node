// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs?api-version=2019-08-01.10.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 05 Aug 2019 19:39:57 GMT',
  etag: '0x8D719DCB2A9D67B',
  location: 'https://test4.japaneast.batch.azure.com/jobs/job-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b7b5362c-0a19-414a-af45-21ea9499cc66',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test4.japaneast.batch.azure.com/jobs/job-1',
  date: 'Mon, 05 Aug 2019 19:39:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/ContainerJobNodeSDKTest/tasks?api-version=2019-08-01.10.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 05 Aug 2019 19:39:58 GMT',
  etag: '0x8D719DCB2EEFE97',
  location:
   'https://test4.japaneast.batch.azure.com/jobs/ContainerJobNodeSDKTest/tasks/ContainerNodeSDKTestTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a82b98a8-b9d6-44fa-9cf2-7106ffcd634c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://test4.japaneast.batch.azure.com/jobs/ContainerJobNodeSDKTest/tasks/ContainerNodeSDKTestTask',
  date: 'Mon, 05 Aug 2019 19:39:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .delete('/jobs/ContainerJobNodeSDKTest?api-version=2019-08-01.10.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f3239343-6c21-448a-8159-69f510d7651e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 05 Aug 2019 19:39:58 GMT',
  connection: 'close' });
 return result; }]];