const mssqlcon = require('./connection');

class checkinMssql {
  async get(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("CheckinProfileId", body.CheckinProfileId)
      .input("Plant", body.Plant)
      .input("PlantId", body.PlantId)
      .input("ProductTypeId", body.ProductTypeId)
      .input("ProductMaterialId", body.ProductMaterialId)
      .input("CarTypeId", body.CarTypeId)
      .input("SenderId", body.SenderId)
      .input("VendorId", body.VendorId)
      .input("CarLicensePlate", body.CarLicensePlate)
      .input("DateSearch", body.DateSearch)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_Checkin_GetList");

    return res;
  }

  async post(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("CheckinProfileId", body.CheckinProfileId)
      .input("Code", body.Code)
      .input("VpassSeq", body.VpassSeq)
      .input("ProductMaterialId", body.ProductMaterialId)
      // .input("CarTypeId", body.CarTypeId)
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
      .input("Status", body.Status)

      .output("pId")
      .output("pPriority")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_Checkin_InsertUpdate");

    return res;
  }

  async queueManagement(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("CheckinId", body.CheckinId)
      .input("DefaultOrder", body.DefaultOrder)
      .input("Order", body.Order)
      .input("Priority", body.Priority)
      .input("Step", body.Step)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_QueueManagement_InsertUpdate");

    return res;
  }

  async draining(param) {
    let body = param.body;
    // let qrdata = 'ID:STAQ410||TT:1||CL:70-3101,80-7392ตง||SUPP:22000375||PT:01' '1||VP-001'
    let qrdata = body.QRData
    let splitted = qrdata.split('||')

    let dataObject = {}
    splitted.forEach(item => {
      let itemSplitted = item.split(':')
      dataObject[itemSplitted[0]] = itemSplitted[1]
    });

    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("PlantId", dataObject.PID)
      .input("CarTypeId", dataObject.CLT)
      .input("CarLicense", dataObject.CL)
      .input("SenderId", dataObject.SEN)
      .input("MaterialId", dataObject.M)
      .input("CheckinProfileId", dataObject.CP)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_INF_DrainTime");

    return res;
  }

  async checkin(param) {
   
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", "checkedin")  //CheckedIn   QualityResult  ITucHKuB
      .input("Id", param.Id)
      .output("pStatus")
      .output("pMessage")
      .execute("USP_MAS_CheckinProfile_GetList");
    return res;
  }

  async qualityresult(param) {
   
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", "qualityresult")  //CheckedIn   QualityResult  ITucHKuB
      .input("Id", param.Id)
      .output("pStatus")
      .output("pMessage")
      .execute("USP_MAS_CheckinProfile_GetList");
    return res;
  }

  async qualityresultlog(param) {
   
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", "insert")  //CheckedIn   QualityResult  ITucHKuB
      .input("CheckinId", param.CheckinId)
      .input("Type", param.Type)
      .input("ResultId", param.ResultId)
      .input("FileName", param.FileName)
      .input("SessionEmpId", param.SessionEmpId)
      .output("pStatus")
      .output("pMessage")
      .execute("[USP_Req_Result]");
    return res;
  }
  
  async dashboard(param) {
    let body = param.body || {};
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("PlantId", body.PlantId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_INF_VPassDashboard");

    return res;
  }
}

module.exports = new checkinMssql();