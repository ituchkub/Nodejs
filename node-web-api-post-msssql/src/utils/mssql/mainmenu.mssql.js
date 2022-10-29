const mssqlcon = require('./connection');

const mainMenuGet = 'USP_MAS_MainMenu_GetList';
const mainMenuInsertUpdate = 'USP_MAS_MainMenu_InsertUpdate';

class mainMenuMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("ParentId", body.ParentId)
      .input("Name", body.Name)
      .input("Permissions", body.Permissions)
      .input("NewTabId", body.NewTabId)
      .input("StatusId", body.StatusId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 10)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(mainMenuGet);

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
      .input("ParentId", body.ParentId)
      .input("Url", body.Url)
      .input("Icon", body.Icon)
      .input("OrderNum", body.OrderNum)
      .input("Permissions", body.Permissions)
      .input("NewTabId", body.NewTabId)
      .input("StatusId", body.StatusId)

      .output("pStatus")
      .output("pMessage")
      
      .execute(mainMenuInsertUpdate);

    return res;
  }
}

module.exports = new mainMenuMssql();