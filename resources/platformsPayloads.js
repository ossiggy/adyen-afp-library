require('dotenv').config();
const fs = require('fs');

const { PLATFORM_KEY } = process.env;

const base64Encode = (file) => {
  const bitmap = fs.readFileSync(file);
  return new Buffer.from(bitmap).toString('base64');
}

module.exports = {
  createAccountHolder: (accountHolderCode, accountHolderDetails, legalEntity) => {
    return {
      uri: "https://cal-test.adyen.com/cal/services/Account/v6/createAccountHolder",
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "x-api-key": PLATFORM_KEY
      },
      body: {
        accountHolderCode,
        accountHolderDetails,
        legalEntity
      },
      json: true
    }
  },
  uploadDoc: (filepath, accountHolderCode, documentType, filename) => {
    const documentContent = base64Encode(filepath);

    return {
      uri: "https://cal-test.adyen.com/cal/services/Account/v6/uploadDocument",
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "x-api-key": PLATFORM_KEY
      },
      body: {
        documentContent,
        documentDetail:{
          accountHolderCode,
          documentType,
          filename
        }
      },
      json: true 
    };
  },
  createNoti: (notifyUrl, events, description) => {
    const eventConfigs = events || [
      {
        "eventType":"ACCOUNT_HOLDER_VERIFICATION",
        "includeMode":"INCLUDE"
      },
      {
      "eventType":"ACCOUNT_HOLDER_CREATED",
      "includeMode":"INCLUDE"
      }
    ];

    return {
      uri: "https://cal-test.adyen.com/cal/services/Notification/v6/createNotificationConfiguration",
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "x-api-key": PLATFORM_KEY
      },
      body: {
        configurationDetails:{
          apiVersion: 6,
          active: true,
          description: description || "Your unique description",
          eventConfigs,
          notifyURL,
          sslProtocol:"SSL"
        }
      },
      json: true   
    }
  },
  getNotiList: () => {
    return {
      uri: "https://cal-test.adyen.com/cal/services/Notification/v6/getNotificationConfigurationList",
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "x-api-key": PLATFORM_KEY
      },
      body: {},
      json: true
    };
  },

}