const dashboard = require('../../utils/mssql/dashboard.mssql')

class dashboardService {
  async getList(req) {
    try {
      if(!req.body.Module) throw 'Invalid Module.';
      
      const output = await dashboard.getList(req.body);
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

module.exports = new dashboardService();