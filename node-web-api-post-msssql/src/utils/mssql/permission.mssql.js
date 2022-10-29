const mssqlcon = require('./connection');
const tbType = require('../mssql/tabletype.mssql')

const permissionGet = 'USP_MAS_Permissions_GetList';
const permissionInsertUpdate = 'USP_MAS_Permissions_InsertUpdate';

class permissionMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("RoleId", body.RoleId)
      .input("PlantId", body.PlantId)
      .input("Name", body.Name)
      .input("StatusId", body.StatusId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 10)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(permissionGet);

    return res;
  }

  async insertUpdate(req) {
    let body = req.body;
    let empTable = tbType.TYPE_EmpRole(body.EmpTable || []);
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("RoleId", body.RoleId)
      .input("PlantId", body.PlantId)
      .input("StatusId", body.StatusId)
      .input("EmpTable", empTable)

      .output("pStatus")
      .output("pMessage")
      
      .execute(permissionInsertUpdate);

    return res;
  }
}

module.exports = new permissionMssql();

