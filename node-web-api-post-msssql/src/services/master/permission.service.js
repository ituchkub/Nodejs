const permission = require('../../utils/mssql/permission.mssql');

class permissionService {
  async getList(req) {
    try {
      const output = await permission.getList(req.body);
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

  async insertUpdate(req) {
    try {
      const output = await permission.insertUpdate(req.body);
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

module.exports = new permissionService();