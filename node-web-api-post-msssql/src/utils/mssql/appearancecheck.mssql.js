const mssqlcon = require('./connection');

const appearanceCheckGet = 'USP_MAS_RssAppearanceCheck_GetList';

class appearanceCheckMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)

      .output("pStatus")
      .output("pMessage")
      
      .execute(appearanceCheckGet);

    return res;
  }
}

module.exports = new appearanceCheckMssql();