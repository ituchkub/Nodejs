const mssqlcon = require('./connection');

const drainTimeGet = 'USP_MAS_DrainTime_GetList';
const drainTimeInsertUpdate = 'USP_MAS_DrainTime_InsertUpdate';

class drainTimeMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("PlantId", body.PlantId)
      .input("CarTypeId", body.CarTypeId)
      .input("DateStart", body.DateStart)
      .input("DateTo", body.DateTo)
      .input("DrainTime", body.DrainTime)
      .input("StatusId", body.StatusId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 10)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(drainTimeGet);

    return res;
  }

  async insertUpdate(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("PlantId", body.PlantId)
      .input("CarTypeId", body.CarTypeId)
      .input("DateStart", body.DateStart)
      .input("DateTo", body.DateTo)
      .input("DrainTime", body.DrainTime)
      .input("StatusId", body.StatusId)

      .output("pStatus")
      .output("pMessage")
      
      .execute(drainTimeInsertUpdate);

    return res;
  }
}

module.exports = new drainTimeMssql();

