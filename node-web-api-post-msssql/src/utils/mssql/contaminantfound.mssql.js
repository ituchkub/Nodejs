const mssqlcon = require('./connection');

const contaminantFoundGet = 'USP_MAS_RssContaminantFound_GetList';

class contaminantFoundMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)

      .output("pStatus")
      .output("pMessage")
      
      .execute(contaminantFoundGet);

    return res;
  }
}

module.exports = new contaminantFoundMssql();