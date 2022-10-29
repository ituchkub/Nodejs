const mssqlcon = require('./connection');

const bannerGet = 'USP_MAS_BannerKiosk_GetList';
const bannerInsertUpdate = 'USP_MAS_BannerKiosk_InsertUpdate';

class bannerMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("Name", body.Name)
      .input("StatusId", body.StatusId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 999)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(bannerGet);

    return res;
  }

  async insertUpdate(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("Name", body.Name)
      .input("OrderNumber", body.OrderNumber)
      .input("AttachId", body.AttachId)
      .input("ImgName", body.ImgName)
      .input("StatusId", body.StatusId)

      .output("pStatus")
      .output("pMessage")
      
      .execute(bannerInsertUpdate);

    return res;
  }
}

module.exports = new bannerMssql();