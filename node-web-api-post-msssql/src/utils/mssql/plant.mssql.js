const mssqlcon = require('./connection');

class plantMssql {
  async get(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("ProductTypeId", body.ProductTypeId)
      .input("PlantSizeId", body.PlantSizeId)

      .input("PlantCode", body.PlantCode)
      .input("PlantNodeCode", body.PlantNodeCode)
      .input("PlantName", body.PlantName)
      .input("Status", body.Status)

      .input("PageNo", param.PageNo || 1)
      .input("PageSize", param.PageSize || 999)
      .input("PageOrder", param.PageOrder || '')
      .input("PageSort", param.PageSort || '')

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_Plant_GetList");

    return res;
  }

  async post(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("ProductTypeId", body.ProductTypeId)
      .input("PlantSizeId", body.PlantSizeId)
      .input("Name", body.Name)
      .input("ShortName", body.ShortName)
      .input("Address", body.Address)
      .input("Description", body.Description)
      .input("Status", body.Status)
      .input("CompanyEN", body.CompanyEN)
      .input("CompanyTH", body.CompanyTH)
      .input("AddressEN", body.AddressEN)
      .input("AddressTH", body.AddressTH)
      .input("TelNumber1", body.TelNumber1)
      .input("TelNumber2", body.TelNumber2)
      .input("TelNumber3", body.TelNumber3)
      .input("FaxNumber", body.FaxNumber)
      .input("RandomQty", body.RandomQty)
      .input("ReceiveQty", body.ReceiveQty)
      .input("DrainStationShort", body.DrainStationShort)
      .input("DrainStationLong", body.DrainStationLong)
      .input("AttachFileId", body.AttachFileId)
      .input("AttachFileName", body.AttachFileName)
      .input("Geographies", body.Geographies)

      .input("isSkipWeightRubberTest", body.isSkipWeightRubberTest)
      .input("isApprovalRequired", body.isApprovalRequired)
      .input("isApproved", body.isApproved)
      .input("WrtDescription", body.WrtDescription)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_Plant_InsertUpdate");

    return res;
  }
}

module.exports = new plantMssql();