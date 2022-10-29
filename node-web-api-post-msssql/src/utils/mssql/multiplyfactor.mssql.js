const mssqlcon = require('./connection');

const multiplyFactorGet = 'USP_MAS_MultiplyFactor_GetList';
const multiplyFactorInsertUpdate = 'USP_MAS_MultiplyFactor_InsertUpdate';

class multiplyFactorMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("PlantId", body.PlantId)
      .input("PlantCode", body.PlantCode)
      .input("PlantName", body.PlantName)
      .input("StatusId", body.StatusId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 10)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(multiplyFactorGet);

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
      .input("WeightBefore", body.WeightBefore)
      .input("WeightAfterFrom", body.WeightAfterFrom)
      .input("WeightAfterTo", body.WeightAfterTo)
      .input("Multiply", body.Multiply)
      .input("PerGen", body.PerGen)
      .input("StatusId", body.StatusId)

      .output("pStatus")
      .output("pMessage")
      
      .execute(multiplyFactorInsertUpdate);

    return res;
  }
}

module.exports = new multiplyFactorMssql();

