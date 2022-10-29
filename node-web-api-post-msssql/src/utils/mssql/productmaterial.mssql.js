const mssqlcon = require('./connection');

class productMaterialMssql {
  async get(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("ProductTypeId", body.ProductTypeId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_ProductMaterial_GetList");

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
      .input("ProductTypeId", body.ProductTypeId)
      .input("MaterialType", body.MaterialType)
      .input("MaterialCode", body.MaterialCode)
      .input("Name", body.Name)
      .input("Description", body.Description)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_ProductMaterial_InsertUpdate");

    return res;
  }
}

module.exports = new productMaterialMssql();