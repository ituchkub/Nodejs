const vendorMssql = require('../../utils/mssql/vendor.mssql');

class vendorService {
  async get(req) {
    try {
      const output = await vendorMssql.get(req.body);

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
    const output = await vendorMssql.post(req.body);

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

module.exports = new vendorService();