const mssqlcon = require('./connection');

const materialThicknessGet = 'USP_MAS_UssMaterialThickness_GetList';

class materialThicknessMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)

      .output("pStatus")
      .output("pMessage")
      
      .execute(materialThicknessGet);

    return res;
  }
}

module.exports = new materialThicknessMssql();