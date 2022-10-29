const mssqlcon = require('./connection');

class strContaminantFoundMssql {
  async get(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("Name", body.Name)
      .input("InternalContaminantTypeId", body.InternalContaminantTypeId)
      .input("ExternalContaminantTypeId", body.ExternalContaminantTypeId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_StrContaminantFound_GetList");

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
      .input("InternalUnit", body.InternalUnit)
      .input("ExternalUnit", body.ExternalUnit)
      .input("InternalFine", body.InternalFine)
      .input("ExternalFine", body.ExternalFine)
      .input("InternalContaminantTypeId", body.InternalContaminantTypeId)
      .input("ExternalContaminantTypeId", body.ExternalContaminantTypeId)
      .input("InternalPriority", body.InternalPriority)
      .input("ExternalPriority", body.ExternalPriority)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_StrContaminantFound_InsertUpdate");

    return res;
  }
}

module.exports = new strContaminantFoundMssql();