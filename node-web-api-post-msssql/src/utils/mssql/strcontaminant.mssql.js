const mssqlcon = require('./connection');

class strContaminantMssql {
  async get(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_StrContaminant_GetList");

    return res;
  }

  async post(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("Name", body.Name)
      .input("Description", body.Description)
      .input("Status", body.Status)
      .input("isInternal", body.isInternal)
      .input("isExternal", body.isExternal)
      .input("isPiece", body.isPiece)
      .input("isFragment", body.isFragment)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_StrContaminant_InsertUpdate");

    return res;
  }
}

module.exports = new strContaminantMssql();