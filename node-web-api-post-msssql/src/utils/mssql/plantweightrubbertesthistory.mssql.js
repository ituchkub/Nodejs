const mssqlcon = require('./connection');

class plantWeightRubberTestHistoryMssql {
  async get(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("PlantId", body.PlantId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_PlantWeightRubberTestHistory_GetList");

    return res;
  }

  async post(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("PlantId", body.PlantId)
      .input("Action", body.Action)
      .input("Description", body.Description)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_PlantWeightRubberTestHistory_InsertUpdate");

    return res;
  }
}

module.exports = new plantWeightRubberTestHistoryMssql();