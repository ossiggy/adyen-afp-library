export type LegalEntityType = 'Individual' | 'Business' | 'NonProfit' | 'Partnership' | 'PublicCompany';

export type NotificationEventsType =
  | 'ACCOUNT_CLOSED'
  | 'ACCOUNT_CREATED'
  | 'ACCOUNT_FUNDS_BELOW_THRESHOLD'
  | 'ACCOUNT_HOLDER_CREATED'
  | 'ACCOUNT_HOLDER_PAYOUT'
  | 'ACCOUNT_HOLDER_STATUS_CHANGE'
  | 'ACCOUNT_HOLDER_STORE_STATUS_CHANGE'
  | 'ACCOUNT_HOLDER_UPDATED'
  | 'ACCOUNT_HOLDER_VERIFICATION'
  | 'BENEFICIARY_SETUP'
  | 'COMPENSATE_NEGATIVE_BALANCE'
  | 'DIRECT_DEBIT_INITIATED'
  | 'PAYMENT_FAILURE'
  | 'REFUND_FUNDS_TRANSFER'
  | 'REPORT_AVAILABLE'
  | 'SCHEDULED_REFUNDS'
  | 'TRANSFER_FUNDS';

export interface EventsType {
  eventType: NotificationEventsType;
  includeMode: 'INCLUDE' | 'EXCLUDE';
}

export interface ConfigurationDetailsType {
  apiVersion?: number;
  active?: boolean;
  description?: string;
  eventConfigs?: [EventsType];
  notifyURL?: string;
  sslProtocol?: string;
}
