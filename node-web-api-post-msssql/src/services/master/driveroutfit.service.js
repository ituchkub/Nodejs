const driverOutfit = require('../../utils/mssql/driveroutfit.mssql')

class driverOutfitService {
  async getList(req) {
    try {
      const output = await driverOutfit.getList(req.body);
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

module.exports = new driverOutfitService();