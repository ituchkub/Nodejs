const mssqlcon = require('./connection');

const environmentGet = 'USP_MAS_RssEnvironment_GetList';

class environmentMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)

      .output("pStatus")
      .output("pMessage")
      
      .execute(environmentGet);

    return res;
  }
}

module.exports = new environmentMssql();