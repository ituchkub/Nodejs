const mssqlcon = require('./connection');

const safetyGet = 'USP_MAS_RssSafety_GetList';

class safetyMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)

      .output("pStatus")
      .output("pMessage")
      
      .execute(safetyGet);

    return res;
  }
}

module.exports = new safetyMssql();