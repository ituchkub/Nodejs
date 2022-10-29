const checkinMssql = require('../../utils/mssql/checkin.mssql');
const checkinHistoryMssql = require('../../utils/mssql/checkinhistory.mssql');

class checkinService {
  
  async get(req) {
    try {
      const output = await checkinMssql.get(req.body);

      if (output.output.pStatus != 1) {
        throw output.output.pMessage;
      }

      let res = {
        status: true,
        data: output.recordset,
        message: output.output.pMessage
      }

      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message ? error.message : error
      }
    }
  }

  async post(req) {
    try {
      const checkinOutput = await checkinMssql.post(req.body);
      if (checkinOutput.output.pStatus != 1) {
        throw checkinOutput.output.pMessage;
      }
      if (req.body.Module.toLowerCase() == 'insert') {
        const queueBody = {
          Module: req.body.Module,
          SessionEmpId: req.body.SessionEmpId,
          body: {
            Id: null,
            Code: null,
            CheckinId: checkinOutput.output.pId,
            DefaultOrder: null,
            Order: null,
            Priority: checkinOutput.output.pPriority,
            Step: 1,
            Status: 1,
          }
        }

        const queueOutput = await checkinMssql.queueManagement(queueBody);
        if (queueOutput.output.pStatus != 1) {
          throw queueOutput.output.pMessage;
        }
      }

      let res = {
        status: true,
        pid: checkinOutput.output.pId,
        message: checkinOutput.output.pMessage
      }

      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message ? error.message : error
      }
    }
  }

  async draining(req) {
    try {
      const output = await checkinMssql.draining(req.body);

      if (output.output.pStatus != 1) {
        throw output.output.pMessage;
      }

      let res = {
        status: true,
        data: output.recordset,
        message: output.output.pMessage
      }

      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message ? error.message : error
      }
    }
  }
  async authorization() {
    try {
      const axios = require('axios');
      let Token = await axios.post(process.env.AuthenUrl, {
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        grantType: "client_credentials"
      });

      let ress = {
        status: true,
        data: Token.data
      }

      return ress
    } catch (error) {
      return {
        status: false,
        message: error.message ? error.message : error
      } 
    }
  }
  async checkedin(req) {
    try {
      require('dotenv').config()

      const output = await checkinMssql.checkin(req.body);
      if (output.output.pStatus != 1) {
        throw output.output.pMessage;
      }
      let Res = output.recordset[0]

      const axios = require('axios');
      let Token = await axios.post(process.env.AuthenUrl, {
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        grantType: "client_credentials"
      });


      var JDataA = {
        "activity": Res.activity.toString(),
        "contractNo": Res.contractNo,
        "subContractNo": Res.subContractNo,
        "vPassDocumentNo": Res.vPassDocumentNo,
        "vPassDateIn": Res.vPassDateIn,
        "vPassTimeIn": Res.vPassTimeIn,
        "receivePlantCode": Res.receivePlantCode,
      };

      let res = await axios.post(process.env.CheckIn, JDataA, {
        headers: {
          'Authorization': 'Bearer ' + Token.data.accessToken
        }
      });

      let data = res.data;
      let resturn = {
        status: true,
        Scritp: JDataA,
        data: data
      }

      const uuid = require('uuid');
      const fs = require('fs');
      let fileName = uuid.v1();
      fs.writeFile("/Result/" + fileName + ".txt", JSON.stringify(resturn), function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });


      let InLog = {
        CheckinId: req.body.Id,
        Type: "Type",
        ResultId: data.deliveryID,
        FileName: fileName,
        SessionEmpId: req.body.SessionEmpId
      }
      const outputLog = await checkinMssql.qualityresultlog(InLog);

      if (output.output.pStatus != 1) {
        throw output.output.pMessage;
      }

      return resturn;

    } catch (error) {
      return {
        status: false,
        message: error.message ? error.message : error
      }
    }
  }

  
  async receiveQualityResult(req) {
    try {
      const output = await checkinMssql.qualityresult(req.body);
      require('dotenv').config()

      if (output.output.pStatus != 1) {
        throw output.output.pMessage;
      }

      let Res = output.recordset[0]
      console.log(Res);

      const axios = require('axios');
      let Token = await axios.post(process.env.AuthenUrl, {
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        grantType: "client_credentials"
      });

      let JDataA = {
        "activity": "1",
        "contractNo": "229900009",
        "subContractNo": "22990000901",
        "materialCode": "CLUM001",
        "ScaleBillNo": "221025001",
        "scaleNo": "221000001",
        "dateTruckIn": "2022-10-25",
        "timeTruckIn": "7:00:00",
        "dateTruckOut": "2022-10-25",
        "timeTruckOut": "7:30:00",
        "dateDrainedWaterIn": "",
        "timeDrainedWaterIn": "",
        "dateDrainedWaterOut": "",
        "timeDrainedWaterOut": "",
        "vPassDateCheckOut": "2022-10-25",
        "vPassTimeCheckOut": "10:00:00",
        "weightIn": 4300,
        "weightOut": 2200,
        "goodsWeight": 2100,
        "grossWeight": 1800,
        "netWeight": 850,
        "deductWood": 0,
        "deductWoodPercentage": 0,
        "deductWater": 3,
        "deductWaterPercentage": 0,
        "deductQuantity": 0,
        "deductQuantityPercentage": 0,
        "totalQuantityDeductedWeight": 300,
        "scaleBillURL": "https://stgt-smartreceive.azurewebsites.net/api/file/filename.png",
        "truckCharge": "0",
        "qcDocumentNo": "221102-000104",
        "qcDate": "2022-10-25",
        "qcTime": "10:22:00",
        "rejectType": "",
        "testResult": "A",
        "vfaResult": 1,
        "drcResult": 64.5,
        "nh3Result": 0,
        "formaldehydeResult": "0",
        "sulfateResult": "0",
        "contaminationBillURL": "",
        "complaintNo": "N-1030-2022000002",
        "contaminateValue": 3000,
        "contaminateDiscount": 1500,
        "contaminateOutstanding": 1500,
        "qualityCheck": "0",
        "drcLabResult": 0,
        "storageLocation": "",
        "assessorName": "",
        "assessorSlipNo": "",
        "lastActionDelivery": "",
        "lotNo": "",
        "noOfSmallTank": 1,
        "createdBy": ""
    };


      let res = await axios.post(process.env.QualityResult, JDataA, {
        headers: {
          'Authorization': 'Bearer ' + Token.data.accessToken
        }
      });

      let data = res.data;
      let ress = {
        status: true,
        Scritp: JDataA,
        data: data
      }

      const uuid = require('uuid');
      const fs = require('fs');
      let fileName = uuid.v1();
      fs.writeFile("/Result/" + fileName + ".txt", JSON.stringify(ress), function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });

      let InLog = {
        CheckinId: req.body.Id,
        Type: "Type",
        ResultId: data.receiveQualityID,
        FileName: fileName,
        SessionEmpId: req.body.SessionEmpId
      }
      const outputLog = await checkinMssql.qualityresultlog(InLog);

      if (output.output.pStatus != 1) {
        throw output.output.pMessage;
      }



      return ress;

    } catch (error) {
      return {
        status: false,
        message: error.message ? error.message : error
      }
    }
  }
  async dashboard(req) {
    try {
      const output = await checkinMssql.dashboard(req.body);

      if (output.output.pStatus != 1) {
        throw output.output.pMessage;
      }

      let res = {
        status: true,
        data: output.recordset,
        message: output.output.pMessage
      }

      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message ? error.message : error
      }
    }
  }

  async getMonitor(req) {
    try {
      let _data = {};
      let res = {
        status: true,
        data: _data,
        message: 'Success.'
      }

      // req.body.Module = 'getmonitor';
      const outputData = await checkinMssql.get(req.body);
      // const outputData = await rssMssql.getAfterWeightStep2(req.body);
      if (outputData.output.pStatus != 1) throw outputData.output.pMessage;
      if (outputData.recordset.length == 0) {
        _data = []
        res.data = _data = {}
        return res
      }

      _data = outputData.recordset;

      req.body.Module = 'getbycheckinid';
      for (let [i, panel] of _data.entries()) {
        req.body.body.CheckinId = panel.Id;
        const outputHistory = await checkinHistoryMssql.get(req.body);
        // const outputHistory = await rssMssql.getAfterWeightStep2(req.body);
        if (outputHistory.output.pStatus != 1) throw outputData.output.pMessage;

        _data[i].HistoryList = outputHistory.recordset;
      }

      res.data = _data
      res.message = outputData.pMessage

      return res;
    }
    catch (error) {
      return { status: false, message: error.message ? error.message : error };
    }
  }
}

module.exports = new checkinService();