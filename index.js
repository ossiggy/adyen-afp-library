const request = require('request-promise');

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