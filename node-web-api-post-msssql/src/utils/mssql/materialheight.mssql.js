const mssqlcon = require('./connection');

const materialHeightGet = 'USP_MAS_RssMaterialHeight_GetList';

class materialHeightMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)

      .output("pStatus")
      .output("pMessage")
      
      .execute(materialHeightGet);

    return res;
  }
}

module.exports = new materialHeightMssql();