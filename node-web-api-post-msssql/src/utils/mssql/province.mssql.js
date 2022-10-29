const mssqlcon = require('./connection');

const provinceGet = 'USP_MAS_ThaiProvinces_GetList';

class provinceMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)

      .output("pStatus")
      .output("pMessage")
      
      .execute(provinceGet);

    return res;
  }
}

module.exports = new provinceMssql();