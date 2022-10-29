const mssqlcon = require('./connection');

class weighingMssql {
  async get(param) {
    let body = param.body;
    let qrdata = body.QRData
    let splitted = qrdata?.split('||')

    let dataObject = {}
    splitted?.forEach(item => {
      let itemSplitted = item.split(':')
      dataObject[itemSplitted[0]] = itemSplitted[1]
    });
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("CheckinProfileId", dataObject.CP)
      .input("VpassCode", dataObject.VP)
      .input("CheckinId", body.CheckinId)
      .input("ProductMaterialId", body.ProductMaterialId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_Weighing_GetList");

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
      .input("CheckinId", body.CheckinId)
      .input("ProductMaterialId", body.ProductMaterialId)
      .input("BatchSlip", body.BatchSlip)
      .input("BatchStock", body.BatchStock)
      .input("ScaleBill", body.ScaleBill)
      .input("ScaleNo", body.ScaleNo)
      .input("TotalPallet", body.TotalPallet)
      .input("GrossWeightIn", body.GrossWeightIn)
      .input("GrossWeightOut", body.GrossWeightOut)
      .input("TotalGrossWeight", body.TotalGrossWeight)
      .input("WeightInDateTime", body.WeightInDateTime)
      .input("WeightInEmpCode", body.WeightInEmpCode)
      .input("WeightInEmpName", body.WeightInEmpName)
      .input("WeightOutDateTime", body.WeightOutDateTime)
      .input("WeightOutEmpCode", body.WeightOutEmpCode)
      .input("WeightOutEmpName", body.WeightOutEmpName)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_MAS_Weighing_InsertUpdate");

    return res;
  }
}

module.exports = new weighingMssql();