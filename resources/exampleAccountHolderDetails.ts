export type AccountDetailsType = {
  [key: string]: any;
};

export const individual: AccountDetailsType = {
  address: {
    country: 'US'
  },
  email: 'tim@green.com',
  individualDetails: {
    name: {
      firstName: 'Tim',
      lastName: 'Green'
    }
  }
};

export const business: AccountDetailsType = {
  address: {
    country: 'US'
  },
  businessDetails: {
    legalBusinessName: 'Real Good Restaurant Inc.',
    shareholders: [
      {
        name: {
          firstName: 'Maria',
          lastName: 'Green'
        },
        address: {
          country: 'US'
        }
      }
    ]
  },
  email: 'maria@green.com'
};

export const nonProfit: AccountDetailsType = {
  address: {
    country: 'US'
  },
  businessDetails: {
    legalBusinessName: 'Real Good Company',
    shareholders: [
      {
        name: {
          firstName: 'Maria',
          lastName: 'Green'
        },
        address: {
          country: 'US'
        }
      }
    ]
  },
  email: 'maria@green.com'
};

export const partnership: AccountDetailsType = {
  address: {
    country: 'US'
  },
  businessDetails: {
    legalBusinessName: 'Real Good Partnership',
    shareholders: [
      {
        name: {
          firstName: 'Maria',
          lastName: 'Green'
        },
        address: {
          country: 'US'
        }
      }
    ]
  },
  email: 'partnership@example.com'
};

export const publicCompany: AccountDetailsType = {
  address: {
    country: 'US'
  },
  businessDetails: {
    legalBusinessName: 'Real Good Public Company',
    signatories: [
      {
        name: {
          firstName: 'Sam',
          lastName: 'Hopper'
        },
        jobTitle: 'Vice President',
        address: {
          country: 'US'
        }
      }
    ]
  },
  email: 'publiccompany@example.com'
};
