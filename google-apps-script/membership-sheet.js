/* eslint-disable @typescript-eslint/no-unused-vars */
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.name, data.address, data.phone, data.email,
    data.district, data.membershipType,
    data.yuvaVedhi ? 'Yes' : 'No',
    data.transactionId, data.message || ''
  ]);
  GmailApp.sendEmail(
    'contact@sasthravedhi.in',
    'New Membership Application - ' + data.name,
    'New membership application received:\n\n' +
    'Name: ' + data.name + '\n' +
    'Type: ' + data.membershipType + '\n' +
    'District: ' + data.district + '\n' +
    'Transaction ID: ' + data.transactionId + '\n' +
    'Phone: ' + data.phone + '\n' +
    'Email: ' + data.email
  );
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
