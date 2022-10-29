const worklist = require('../../utils/mssql/worklist.mssql')

class worklistService {
  async getList(req) {
    try {
      if(!req.body.Module) throw 'Invalid Module.';
      
      const output = await worklist.getList(req.body);
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

module.exports = new worklistService();