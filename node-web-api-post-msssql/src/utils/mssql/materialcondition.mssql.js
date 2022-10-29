const mssqlcon = require('./connection');

const matConGetList = 'USP_MAS_RssMaterialCondition_GetList';
const matConInsertUpdate = 'USP_MAS_RssMaterialCondition_InsertUpdate';

class materialConditionMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("PlanCode", body.PlanCode)
      .input("TypeId", body.TypeId)
      .input("ConditionId", body.ConditionId)
      .input("StatusId", body.StatusId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 10)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(matConGetList);

    return res;
  }

  async insertUpdate(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("PlanCode", body.PlanCode)
      .input("TypeId", body.TypeId)
      .input("Name", body.Name)
      .input("Description", body.Description)
      .input("ResultId", body.ResultId)
      .input("ConditionId", body.ConditionId)
      .input("StatusId", body.StatusId)

      .output("pStatus")
      .output("pMessage")
      
      .execute(matConInsertUpdate);

    return res;
  }
}

module.exports = new materialConditionMssql();


