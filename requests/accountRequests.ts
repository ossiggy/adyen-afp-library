import fs from 'fs';
import { AccountDetailsType } from '../resources';

import type { LegalEntityType } from '../types';
const { PLATFORM_KEY } = process.env;

const base64Encode = (file: string) => {
  const bitmap: Buffer = fs.readFileSync(file);
  return Buffer.from(bitmap).toString('base64');
};

export const createAccountHolder = (accountHolderCode: string, accountHolderDetails: AccountDetailsType, legalEntity: LegalEntityType) => ({
  uri: 'https://cal-test.adyen.com/cal/services/Account/v6/createAccountHolder',
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    'x-api-key': PLATFORM_KEY
  },
  body: {
    accountHolderCode,
    accountHolderDetails,
    legalEntity
  },
  json: true
});

export const createAccount = (accountHolderCode: string) => ({
  uri: 'https://cal-test.adyen.com/cal/services/Account/v6/createAccount',
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    'x-api-key': PLATFORM_KEY
  },
  body: {
    accountHolderCode
  },
  json: true
});

export const uploadDoc = (filepath: string, accountHolderCode: string, documentType: string, filename: string) => {
  const documentContent = base64Encode(filepath);

  return {
    uri: 'https://cal-test.adyen.com/cal/services/Account/v6/uploadDocument',
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'x-api-key': PLATFORM_KEY
    },
    body: {
      documentContent,
      documentDetail: {
        accountHolderCode,
        documentType,
        filename
      }
    },
    json: true
  };
};

export const checkAccountHolder = (accountHolderCode: string, accountStateType: 'Payout' | 'Processing', tier: number) => ({
  uri: 'https://cal-test.adyen.com/cal/services/Account/v6/checkAccountHolder',
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    'x-api-key': PLATFORM_KEY
  },
  body: {
    accountHolderCode,
    accountStateType,
    tier
  },
  json: true
});

export const updateAccountHolder = (accountHolderCode: string, accountHolderDetails: AccountDetailsType, legalEntity: LegalEntityType) => ({
  uri: 'https://cal-test.adyen.com/cal/services/Account/v6/updateAccountHolder',
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    'x-api-key': PLATFORM_KEY
  },
  body: {
    accountHolderCode,
    accountHolderDetails
  },
  json: true
});
