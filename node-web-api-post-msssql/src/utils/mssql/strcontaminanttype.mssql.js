const mssqlcon = require('./connection');

class strContaminantTypeMssql {
  async get(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("PriorityId", body.PriorityId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_StrContaminantType_GetList");

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
      .input("PriorityId", body.PriorityId)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_StrContaminantType_InsertUpdate");

    return res;
  }
}

module.exports = new strContaminantTypeMssql();