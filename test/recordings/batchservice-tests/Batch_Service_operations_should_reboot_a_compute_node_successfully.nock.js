// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/nodes/tvm-115883067_1-20170720t195226z/reboot?api-version=2017-06-01.5.1')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1c0e6d84-6a04-4b4e-92c7-830d16739e82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-115883067_1-20170720t195226z/reboot',
  date: 'Thu, 20 Jul 2017 20:06:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/nodes/tvm-115883067_1-20170720t195226z/reboot?api-version=2017-06-01.5.1')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1c0e6d84-6a04-4b4e-92c7-830d16739e82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-115883067_1-20170720t195226z/reboot',
  date: 'Thu, 20 Jul 2017 20:06:08 GMT',
  connection: 'close' });
 return result; }]];