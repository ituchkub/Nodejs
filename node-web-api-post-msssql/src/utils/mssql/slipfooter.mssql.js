const mssqlcon = require('./connection');

const slipGet = 'USP_MAS_SlipFooter_GetList';
const slipInsertUpdate = 'USP_MAS_SlipFooter_InsertUpdate';

class slipMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("Title", body.Title)
      .input("Text", body.Text)
      .input("StatusId", body.StatusId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 999)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(slipGet);

    return res;
  }

  async insertUpdate(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("Title", body.Title)
      .input("Text", body.Text)
      .input("StatusId", body.StatusId)

      .output("pStatus")
      .output("pMessage")
      
      .execute(slipInsertUpdate);

    return res;
  }
}

module.exports = new slipMssql();

