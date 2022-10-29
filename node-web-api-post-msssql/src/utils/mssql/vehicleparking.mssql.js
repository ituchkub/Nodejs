const mssqlcon = require('./connection');

const vehicleParkingGet = 'USP_MAS_RssVehicleParking_GetList';

class vehicleParkingMssql {
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
      
      .execute(vehicleParkingGet);

    return res;
  }
}

module.exports = new vehicleParkingMssql();