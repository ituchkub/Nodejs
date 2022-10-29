const mssqlcon = require('./connection');

class checkinHistoryMssql {
  async get(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("CheckinId", body.CheckinId)
      .input("StateId", body.StateId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_CheckinHistory_GetList");

    return res;
  }

  async post(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("CheckinId", body.CheckinId)
      .input("StateId", body.StateId)
      .input("Step", body.Step)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_CheckinHistory_InsertUpdate");

    return res;
  }
}

module.exports = new checkinHistoryMssql();