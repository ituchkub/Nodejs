const mssqlcon = require('./connection');

const batchGet = 'USP_MAS_DRCBatch_GetList';
const batchInsertUpdate = 'USP_MAS_DRCBatch_InsertUpdate';

class batchMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("PlantId", body.PlantId)
      .input("Batch", body.Batch)
      .input("IsActive", body.IsActive)
      .input("IsDefault", body.IsDefault)
      .input("StatusId", body.StatusId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 10)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(batchGet);

    return res;
  }

  async insertUpdate(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("PlantId", body.PlantId)
      .input("Batch", body.Batch)
      .input("Description", body.Description)
      .input("IsActive", body.IsActive)
      .input("IsDefault", body.IsDefault)
      .input("StatusId", body.StatusId)

      .output("pStatus")
      .output("pMessage")
      
      .execute(batchInsertUpdate);

    return res;
  }
}

module.exports = new batchMssql();

