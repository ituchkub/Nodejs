const mssqlcon = require('./connection');

class employeeProfileMssql {
  async get(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("PlantId", body.PlantId)
      .input("EmpCode", body.EmpCode)
      .input("ProfileId", body.ProfileId)
      .input("Name", body.Name)
      .input("UserName", body.UserName)
      .input("StatusId", body.StatusId)
      .input("TextSearch1", body.TextSearch1)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_EmployeeProfile_GetList");

    return res;
  }

  async post(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("PlantId", body.PlantId)
      .input("EmpCode", body.EmpCode)
      .input("ProfileId", body.ProfileId)
      .input("Title", body.Title)
      .input("FirstName", body.FirstName)
      .input("LastName", body.LastName)
      .input("TitleEn", body.TitleEn)
      .input("FirstNameEn", body.FirstNameEn)
      .input("LastNameEn", body.LastNameEn)
      .input("PhoneNumber", body.PhoneNumber)
      .input("Position", body.Position)
      .input("AccountType", body.AccountType)
      .input("Role", body.Role)
      .input("Address", body.Address)
      .input("Email", body.Email)
      .input("Username", body.Username)
      .input("Active", body.Active)
      .input("StatusId", body.StatusId)
      .input("AccessToken", body.AccessToken)
      .input("RefreshToken", body.RefreshToken)
      .input("ExpireDate", body.ExpireDate)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_EmployeeProfile_InsertUpdate");

    return res;
  }
}

module.exports = new employeeProfileMssql();