module.exports = {
  individual: {
    "address": {
      "country": "US"
    },
    "email":"tim@green.com",
    "individualDetails":{
       "name":{
          "firstName":"Tim",
          "lastName":"Green"
       }
    }
 },
  business: {
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
  }
}