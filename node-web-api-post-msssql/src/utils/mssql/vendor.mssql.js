const mssqlcon = require('./connection');

class vendorMssql {
  async get(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_Vendor_GetList");

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
      .input("Catagory", body.Catagory)
      .input("Name", body.Name)
      .input("Status", body.Status)


      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_Vendor_InsertUpdate");

    return res;
  }
}

module.exports = new vendorMssql();