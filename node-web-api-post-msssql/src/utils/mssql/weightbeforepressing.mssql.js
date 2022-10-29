const mssqlcon = require('./connection');

const weightBeforePressingGet = 'USP_MAS_LtxWeightBeforePressing_GetList';
const weightBeforePressingInsertUpdate = 'USP_MAS_LtxWeightBeforePressing_InsertUpdate';

class weightBeforePressingMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("PlantId", body.PlantId)
      .input("StatusId", body.StatusId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 10)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(weightBeforePressingGet);

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
      .input("Weight", body.Weight)
      .input("StatusId", body.StatusId)

      .output("pStatus")
      .output("pMessage")
      
      .execute(weightBeforePressingInsertUpdate);

    return res;
  }
}

module.exports = new weightBeforePressingMssql();

