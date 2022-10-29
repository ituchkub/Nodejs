const mssqlcon = require('./connection');

class checkinProfileMssql {
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
      .input("CarTypeId", body.CarTypeId)
      .input("SenderId", body.SenderId)
      .input("VpassCode", body.VpassCode)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_CheckinProfile_GetList");

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
      .input("VpassCode", body.VpassCode)
      .input("VpassTotalSeq", body.VpassTotalSeq)
      .input("PlantId", body.PlantId)
      .input("CarTypeId", body.CarTypeId)
      .input("StaRegisterCode", body.StaRegisterCode)
      .input("NationalCardNumber", body.NationalCardNumber)
      .input("FullName", body.FullName)
      .input("CarLicensePlate", body.CarLicensePlate)
      .input("TrailerLicensePlate", body.TrailerLicensePlate)
      .input("isDumper", body.isDumper)
      .input("Po", body.Po)
      .input("PoItem", body.PoItem)
      .input("PurchaseType", body.PurchaseType)
      .input("TradeType", body.TradeType)
      .input("ContractNo", body.ContractNo)
      .input("SubContractNo", body.SubContractNo)
      .input("Status", body.Status)

      .input("ProductMaterialId", body.ProductMaterialId)
      .input("VendorId", body.VendorId)
      .input("SenderId", body.SenderId)
      .input("SenderStatus", body.SenderStatus)
      .input("SenderCode", body.SenderCode)
      .input("SenderName", body.SenderName)
      .input("VendorCode", body.VendorCode)
      .input("VendorName", body.VendorName)
      .input("ProvinceCode", body.ProvinceCode)
      .input("DistrictCode", body.DistrictCode)
      .input("SubDistrictCode", body.SubDistrictCode)
      .input("Humidity", body.Humidity)
      .input("isFastrack", body.isFastrack)
      .input("isAppropriateRail", body.isAppropriateRail)
      .input("RailRejectReason", body.RailRejectReason)
      .input("isAppropriateTank", body.isAppropriateTank)
      .input("TankRejectReason", body.TankRejectReason)
      .input("isAppropriateCanvas", body.isAppropriateCanvas)
      .input("CanvasRejectReason", body.CanvasRejectReason)
      .input("Description", body.Description)
      .input("isApproved", body.isApproved)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_CheckinProfile_InsertUpdate");

    return res;
  }
}

module.exports = new checkinProfileMssql();