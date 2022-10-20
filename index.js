require('dotenv').config();
const request = require('request-promise');

const { API_KEY, PLATFORM_KEY } = process.env;
const { base64Encode } = require("./resources/convertToBase.js");
const base64 = base64Encode("./PASSED.jpg")


const getNotiList = {
  uri: "https://cal-test.adyen.com/cal/services/Notification/v6/getNotificationConfigurationList",
  method: "POST",
  headers: {
    "Content-type": "application/json",
    "x-api-key": PLATFORM_KEY
  },
  body: {},
  json: true
};

const updateNoti = {
  uri: "https://cal-test.adyen.com/cal/services/Notification/v6/updateNotificationConfiguration",
  method: "POST",
  headers: {
    "Content-type": "application/json",
    "x-api-key": PLATFORM_KEY
  },
  body: {
    "configurationDetails":{
       "notificationId":28176,
       "notifyURL":"https://adyen-notifications.herokuapp.com/notifications",
       "sslProtocol":"SSL"
    }
 },
  json: true
};

const createAccountHolder = {
  uri: "https://cal-test.adyen.com/cal/services/Account/v6/createAccountHolder",
  method: "POST",
  headers: {
    "Content-type": "application/json",
    "x-api-key": PLATFORM_KEY
  },
  body: {
    "accountHolderCode": "TEST_BUSINESS_ACCOUNT",
    "accountHolderDetails": {
      "address": {
          "country": "US"
      },
      "businessDetails": {
        "legalBusinessName": "Real Good Restaurant Inc.",
        "shareholders": [
          {
              "name": {
                "firstName": "Maria",
                "lastName": "Green"
              },
              "address": {
                "country": "US"
              }
          }
        ]
      },
      "email": "maria@green.com"
    },
    "legalEntity": "Business"
  },
   json: true 
};


const postRequest = async (options) => {
  try {
    const response = await request(options);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err.message);
  }
}

// postRequest(uploadDoc)