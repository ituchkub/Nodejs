const mssqlcon = require('./connection');

const adminManagementGet = 'USP_MAS_AdminManagement_GetList';

class adminManagementMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("DateFrom", body.DateFrom)
      .input("DateTo", body.DateTo)
      .input("PlantId", body.PlantId)
      .input("RMType", body.RMType)
      .input("RequestNo", body.RequestNo)
      .input("StatusId", body.StatusId)
      .input("VendorCode", body.VendorCode)
      .input("VendorName", body.VendorName)
      .input("SenderCode", body.SenderCode)
      .input("SenderName", body.SenderName)
      .input("DriverName", body.DriverName)
      .input("MemberName", body.MemberName)
      .input("CarLicence", body.CarLicence)
      .input("Inspector", body.Inspector)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 999)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")
      
      .execute(adminManagementGet);

    return res;
  }
}

module.exports = new adminManagementMssql();