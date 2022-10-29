const mssqlcon = require('./connection');

const vehicleConditionGet = 'USP_MAS_RssVehicleCondition_GetList';

class vehicleConditionMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)

      .input("PageNo", req.PageNo)
      .input("PageSize", req.PageSize)
      .input("PageOrder", req.PageOrder)
      .input("PageSort", req.PageSort)

      .output("pStatus")
      .output("pMessage")
      
      .execute(vehicleConditionGet);

    return res;
  }
}

module.exports = new vehicleConditionMssql();