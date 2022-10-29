const readQrCodeMssql = require('../../utils/mssql/readqrcode.mssql');

class readQrCodeService {
  async get(req) {
    try {
      const output = await readQrCodeMssql.get(req.body);

      if (output.output.pStatus != 1) {
        throw output.output.pMessage;
      }

      let res = {
        status: true,
        type: output.output.pType,
        data: output.recordset,
        message: output.output.pMessage
      }
      console.log('readQrCodeService: ', res);
      
      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message ? error.message : error
      }
    }
  }
}

module.exports = new readQrCodeService();