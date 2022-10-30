
class Service {
  async get(req) {
    return 'This is my API running...'
  }
  async postEx(req) {
    let Name = req.body.name;
    let mail = req.body.mail;
    return('This is my Name  : ' + Name + ' And My E-Mail : ' + mail)
    //res.send(req.body)    {"name":"Kantathus","mail":"ituchkub@gmail.com"}
  }
  async Author(req) {
    const axios = require('axios');
    let reqe = await axios.post('https://third-party-authentication-sit.sritrangfriends.com/api/restful/v1/third-party/authentication', {
      clientID: "6cfbcf8f-45ed-4a14-b37f-7438eedbdd36",
      clientSecret: "MTE3MmNhNzctODA5NS00MTg4LWE0YTYtNDNlNjg4YzU1YTMy",
      grantType: "client_credentials"
    });

    let res = {
      status: true,
      data: reqe.data
    }
    return res
  }

  async AxiosEx(req) {
    const axios = require('axios');
    var JDataA = {
      "activity": "1",
      "contractNo": "221234567",
      "subContractNo": "22123456701",
      "vPassDocumentNo": "SMR-22-1060-000001",
      "vPassDateIn": "2022-12-01",
      "vPassTimeIn": "07:29",
      "receivePlantCode": "1030"
    };
    let reqe = await axios.post('https://rubber-purchasing-integration-sit.sritrangfriends.com/api/restful/v1/rubber-trading/delivery/checked-in', JDataA, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJRCI6IjZjZmJjZjhmLTQ1ZWQtNGExNC1iMzdmLTc0MzhlZWRiZGQzNiIsImNyZWF0ZWRBdCI6IjIwMjItMTAtMzBUMDQ6MDY6MTcuNDI3NzE0NjU1WiIsImV4cGlyZXNJbiI6IjIwMjItMTAtMzBUMTI6MDY6MTcuNDI3NzEzODk3WiIsImlzcyI6ImNvbS5zcml0YW5nZnJpZW5kbmV4dCJ9.SU73KtddjVcBSM6x1m2g2fgcGKJ2zl60NDe6fwbjmmLek5M-YMvlZIjDDZlpPMkP0lVBD_2UibuHOGhMSWa1Ag'
      }
    });

    let res = {
      status: true,
      data: reqe.data
    }
    return res
  }
}

module.exports = new Service();