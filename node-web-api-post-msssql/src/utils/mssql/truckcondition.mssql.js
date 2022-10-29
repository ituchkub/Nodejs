const mssqlcon = require('./connection');

const truckGet = 'USP_MAS_RssTruckCondition_GetList';

class truckConMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)

      .output("pStatus")
      .output("pMessage")
      
      .execute(truckGet);

    return res;
  }
}

module.exports = new truckConMssql();