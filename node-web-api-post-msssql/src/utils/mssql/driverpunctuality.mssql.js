const mssqlcon = require('./connection');

const driverPunctualityGet = 'USP_MAS_RssDriverPunctuality_GetList';

class driverPunctualityMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)

      .output("pStatus")
      .output("pMessage")
      
      .execute(driverPunctualityGet);

    return res;
  }
}

module.exports = new driverPunctualityMssql();