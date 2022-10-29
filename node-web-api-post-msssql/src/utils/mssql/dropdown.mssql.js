const mssqlcon = require('./connection');

const dropdownGet = 'USP_MAS_Dropdown_GetList';

class dropdownMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("Text", body.Text)
      .input("Type", body.Type)
      .input("TypeName", body.TypeName)
      .input("StatusId", body.StatusId)
      
      .input("TextSearch1", body.TextSearch1)
      .input("TextSearch2", body.TextSearch2)
      .input("TextSearch3", body.TextSearch3)
      .input("TextSearch4", body.TextSearch4)
      .input("TextSearch5", body.TextSearch5)

      .output("pStatus")
      .output("pMessage")
      
      .execute(dropdownGet);

    return res;
  }
}

module.exports = new dropdownMssql();