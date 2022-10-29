const mssqlcon = require('./connection');

class queueManagementMssql {
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
      .input("PlantId", body.PlantId)
      .input("ProductTypeId", body.ProductTypeId)
      .input("CarTypeId", body.CarTypeId)
      .input("Status", body.Status)
      .input("CarLicensePlate", body.CarLicensePlate)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_QueueManagement_GetList");

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
      .input("CheckinId", body.CheckinId)
      .input("Order", body.Order)
      .input("Priority", body.Priority)
      .input("Step", body.Step)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_QueueManagement_InsertUpdate");

    return res;
  }
}

module.exports = new queueManagementMssql();