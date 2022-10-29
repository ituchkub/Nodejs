const mssqlcon = require('./connection');

const checkingGet = 'USP_MAS_CheckingStatus_GetList';

class checkingMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)

      .output("pStatus")
      .output("pMessage")
      
      .execute(checkingGet);

    return res;
  }
}

module.exports = new checkingMssql();