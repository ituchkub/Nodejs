const satisfaction = require('../../utils/mssql/satisfaction.mssql');

class satisfactionService {
  async getList(req) {
    try {
      const output = await satisfaction.getList(req.body);
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
      const output = await satisfaction.insertUpdate(req.body);
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

module.exports = new satisfactionService();