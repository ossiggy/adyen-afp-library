import type { ConfigurationDetailsType, EventsType } from '../types';
const { PLATFORM_KEY } = process.env;

export const createNoti = (notifyURL: string, events: [EventsType], description: string) => {
  const eventConfigs: [EventsType] = events || [
    {
      eventType: 'ACCOUNT_HOLDER_VERIFICATION',
      includeMode: 'INCLUDE'
    },
    {
      eventType: 'ACCOUNT_HOLDER_CREATED',
      includeMode: 'INCLUDE'
    }
  ];

  const configurationDetails: ConfigurationDetailsType = {
    apiVersion: 6,
    active: true,
    description: description || 'Your unique description',
    eventConfigs,
    notifyURL,
    sslProtocol: 'SSL'
  };

  return {
    uri: 'https://cal-test.adyen.com/cal/services/Notification/v6/createNotificationConfiguration',
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'x-api-key': PLATFORM_KEY
    },
    body: {
      configurationDetails
    },
    json: true
  };
};

export const getNotiById = (notificationId: string) => ({
  uri: 'https://cal-test.adyen.com/cal/services/Notification/v6/getNotificationConfiguration',
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    'x-api-key': PLATFORM_KEY
  },
  body: { notificationId },
  json: true
});

export const getNotiList = () => ({
  uri: 'https://cal-test.adyen.com/cal/services/Notification/v6/getNotificationConfigurationList',
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    'x-api-key': PLATFORM_KEY
  },
  body: {},
  json: true
});

export const updateNoti = (notifyURL: string, active?: boolean, eventConfigs?: [EventsType], description?: string) => {
  const configurationDetails: ConfigurationDetailsType = {
    apiVersion: 6,
    sslProtocol: 'SSL'
  };

  if (notifyURL) {
    configurationDetails.notifyURL = notifyURL;
  }

  if (eventConfigs) {
    configurationDetails.eventConfigs = eventConfigs;
  }

  if (description) {
    configurationDetails.description = description;
  }

  if (active) {
    configurationDetails.active = active;
  }

  return {
    uri: 'https://cal-test.adyen.com/cal/services/Notification/v6/updateNotificationConfiguration ',
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'x-api-key': PLATFORM_KEY
    },
    body: {
      configurationDetails
    },
    json: true
  };
};

export const deleteNotis = (notificationIds: [number]) => ({
  uri: 'https://cal-test.adyen.com/cal/services/Notification/v6/deleteNotificationConfigurations ',
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    'x-api-key': PLATFORM_KEY
  },
  body: { notificationIds },
  json: true
});
