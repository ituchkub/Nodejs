const mssqlcon = require('./connection');

const acceptanceRateGet = 'USP_Req_StrDrcAcceptanceRate_GetList';
const acceptanceRateInsertUpdate = 'USP_Req_StrDrcAcceptanceRate_InsertUpdate';

class acceptanceRateMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("PlantId", body.PlantId)
      .input("AcceptanceNegative", body.AcceptanceNegative)
      .input("AcceptancePositive", body.AcceptancePositive)
      .input("ValueNegative", body.ValueNegative)
      .input("ValuePositive", body.ValuePositive)
      .input("StatusId", body.StatusId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 10)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(acceptanceRateGet);

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
      .input("AcceptanceNegative", body.AcceptanceNegative)
      .input("AcceptancePositive", body.AcceptancePositive)
      .input("ValueNegative", body.ValueNegative)
      .input("ValuePositive", body.ValuePositive)
      .input("StatusId", body.StatusId)

      .output("pStatus")
      .output("pMessage")
      
      .execute(acceptanceRateInsertUpdate);

    return res;
  }
}

module.exports = new acceptanceRateMssql();

