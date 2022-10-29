const mssqlcon = require('./connection');

const contaminantFinesGet = 'USP_MAS_StrContaminantFines_GetList';
const contaminantFinesInsertUpdate = 'USP_MAS_StrContaminantFines_InsertUpdate';

class contaminantFinesMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("Name", body.Name)
      .input("Contaminant", body.Contaminant)
      .input("Amount", body.Amount)
      .input("ExternalAmount", body.ExternalAmount)
      .input("UnitName", body.UnitName)
      .input("Priority", body.Priority)
      .input("StatusId", body.StatusId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 10)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(contaminantFinesGet);

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
      .input("Contaminant", body.Contaminant)
      .input("Amount", body.Amount)
      .input("ExternalAmount", body.ExternalAmount)
      .input("UnitName", body.UnitName)
      .input("Priority", body.Priority)
      .input("StatusId", body.StatusId)

      .output("pStatus")
      .output("pMessage")
      
      .execute(contaminantFinesInsertUpdate);

    return res;
  }
}

module.exports = new contaminantFinesMssql();

