const drc = require('../../utils/mssql/drc.mssql')

class drcService {
  async getList(req) {
    try {
      let output = await drc.getList(req.body);
      if(output.output.pStatus != 1) throw output.output.pMessage;

      if(req.body.Module.toLowerCase() == 'getbyid') {
        req.body.Module = 'GetWeightTest'
        const weightOutput = await drc.getList(req.body);
        if(weightOutput.output.pStatus != 1) throw weightOutput.output.pMessage;
        if(output.recordset.length > 0) {
          output.recordset[0].WeightTest = weightOutput.recordset || []
        }
      }

      let res = {
        status: true,
        data: output.recordset,
        message: output.output.pMessage
      };

      return res;
    }
    catch(error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }

  async insertUpdate(req) {
    try {
      const output = await drc.insertUpdate(req.body);
      if(output.output.pStatus != 1) throw output.output.pMessage;

      let res = {
        status: true,
        pid: output.output.pId,
        message: output.output.pMessage,
        mailTemplate: output.output.pMailTemplate,
        mailFrom: output.output.pMailFrom,
        mailTo: output.output.pMailTo,
        mailCc: output.output.pMailCc
      };

      return res;
    }
    catch(error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }

  async getApproval(req) {
    try {
      const output = await drc.getApproval(req.body);

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

  async postApproval(req) {
    try {
      const output = await drc.postApproval(req.body);

      if (output.output.pStatus != 1) {
        throw output.output.pMessage;
      }

      let res = {
        status: true,
        pid: output.output.pId,
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

  async interface(req) {
    try {
      const output = await drc.interface(req.body);
      if(output.output.pStatus != 1) throw output.output.pMessage;

      let res = {
        status: true,
        data: output.recordset,
        message: output.output.pMessage
      };

      return res;
    }
    catch(error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }
}

module.exports = new drcService();