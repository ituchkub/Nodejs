const mssqlcon = require('./connection');

const satisfactionGet = 'USP_Log_Satisfaction_GetList';
const satisfactionInsertUpdate = 'USP_Log_Satisfaction_InsertUpdate';

class satisfactionMssql {
  async getList(req) {
    let body = req.body || {};
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("CheckinId", body.CheckinId)
      .input("VendorId", body.VendorId)
      .input("SenderId", body.SenderId)
      .input("SatisfactionId", body.SatisfactionId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 999)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(satisfactionGet);

    return res;
  }

  async insertUpdate(req) {
    let body = req.body || {};
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("CheckinId", body.CheckinId)
      .input("VendorId", body.VendorId)
      .input("SenderId", body.SenderId)
      .input("SatisfactionId", body.SatisfactionId)

      .output("pStatus")
      .output("pMessage")
      
      .execute(satisfactionInsertUpdate);

    return res;
  }
}

module.exports = new satisfactionMssql();