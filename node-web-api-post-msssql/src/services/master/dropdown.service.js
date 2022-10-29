const dropdown = require('../../utils/mssql/dropdown.mssql')

class dropdownService {
  async getList(req) {
    try {
      const output = await dropdown.getList(req.body);
      if(output.output.pStatus == 0) throw output.output.pMessage;

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

module.exports = new dropdownService();