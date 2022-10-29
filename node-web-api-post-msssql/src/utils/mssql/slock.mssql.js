const mssqlcon = require('./connection');

class slockMssql {
  async get(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("PlantId", body.PlantId)
      .input("Name", body.Name)
      .input("isActive", body.isActive)
      .input("isQcActive", body.isQcActive)

      .input("PageNo", param.PageNo || 1)
      .input("PageSize", param.PageSize || 999)
      .input("PageOrder", param.PageOrder || '')
      .input("PageSort", param.PageSort || '')

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_Slock_GetList");

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
      .input("PlantId", body.PlantId)
      .input("Name", body.Name)
      .input("Description", body.Description)
      .input("Status", body.Status)
      .input("isActive", body.isActive)
      .input("isQcActive", body.isQcActive)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_Slock_InsertUpdate");

    return res;
  }
}

module.exports = new slockMssql();