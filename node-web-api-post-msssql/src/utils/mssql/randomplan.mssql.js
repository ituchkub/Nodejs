const mssqlcon = require('./connection');

const randomPlanGet = 'USP_MAS_StrRandomPlan_GetList';
const randomPlanInsertUpdate = 'USP_MAS_StrRandomPlan_InsertUpdate';

class randomPlanMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("PlantId", body.PlantId)
      .input("RandomPlanId", body.RandomPlanId)
      .input("StatusId", body.StatusId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 10)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(randomPlanGet);

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
      .input("Name", body.Name)
      .input("RandomPlanId", body.RandomPlanId)
      .input("PlantId", body.PlantId)
      .input("StatusId", body.StatusId)

      .output("pStatus")
      .output("pMessage")
      
      .execute(randomPlanInsertUpdate);

    return res;
  }
}

module.exports = new randomPlanMssql();

