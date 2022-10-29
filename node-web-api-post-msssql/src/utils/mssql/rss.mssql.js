const mssqlcon = require('./connection');
const tbType = require('../mssql/tabletype.mssql')

const before_get = "USP_Req_RSS_BeforeWeight_GetList";
const before_insertUpdate = "USP_Req_RSS_BeforeWeight_InsertUpdate";
const step1_get = "USP_Req_RSS_AfterWeight_Step1_GetList";
const step1_insertUpdate = "USP_Req_RSS_AfterWeight_Step1_InsertUpdate";
const step2_get = "USP_Req_RSS_AfterWeight_Step2_GetList";
const step2_insertUpdate = "USP_Req_RSS_AfterWeight_Step2_InsertUpdate";
const step3_get = "USP_Req_RSS_AfterWeight_Step3_GetList";
const step3_insertUpdate = "USP_Req_RSS_AfterWeight_Step3_InsertUpdate";
const step4_get = 'USP_Req_RSS_AfterWeight_Step4_GetList'
const step4_insertUpdate = "USP_Req_RSS_AfterWeight_Step4_InsertUpdate";

class rsseMssql {

  async beforeWeightGetList(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("CheckinId", body.ReqId)

      .output("pReturnId")
      .output("pStatus")
      .output("pMessage")

      .execute(before_get);

    return res;
  }

  async beforeWeightInsertUpdate(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("CheckinId", body.CheckinId)
      .input("VendorId", body.VendorId)
      .input("MaterialConId", body.MaterialConId)
      .input("PackingId", body.PackingId)
      .input("VehicleConId", body.VehicleConId)
      .input("EstimatedWeight", body.EstimatedWeight)
      .input("Result", body.Result)
      .input("Description", body.Description)
      .input("DocumentRef", body.DocumentRef)
      .input("StatusId", body.StatusId)

      .output("pReturnId")
      .output("pStatus")
      .output("pMessage")
      .output("pMailTemplate")
      .output("pMailFrom")
      .output("pMailTo")
      .output("pMailCc")

      .execute(before_insertUpdate);

    return res;
  }

  async getAfterWeightStep1(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)
      .input("CheckinId", body.CheckinId)

      .output("pStatus")
      .output("pMessage")

      .execute(step1_get);

    return res;
  }

  async afterWeightStep1InsertUpdate(param) {
    let body = param.body;

    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)
      .input("CheckinId", body.CheckinId)
      .input("StrorangeId", body.StrorangeId)
      .input("ParkingId", body.ParkingId)
      .input("PanelQty", body.PanelQty)
      .input("Remark", body.Remark)
      .input("ResultId", body.ResultId)
      .input("StatusId", body.StatusId)

      .output("pReturnId")
      .output("pStatus")
      .output("pMessage")
      .output("pMailTemplate")
      .output("pMailFrom")
      .output("pMailTo")
      .output("pMailCc")

      .execute(step1_insertUpdate);

    return res;
  }

  async getAfterWeightStep2(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)
      .input("CheckinId", body.CheckinId)
      .input("PanelId", body.PanelId)

      .output("pReturnId")
      .output("pStatus")
      .output("pMessage")

      .execute(step2_get);

    return res;
  }

  async afterWeightStep2InsertUpdate(param) {
    let body = param.body;
    let defectTable = tbType.TYPE_Defect(body.DefectTable || []);

    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)
      .input("CheckinId", body.CheckinId)
      .input("PanelId", body.PanelId)
      .input("Number", body.Number)
      .input("Height", body.Height)
      .input("HeightId", body.HeightId)
      .input("Thickness", body.Thickness)
      .input("ThicknessId", body.ThicknessId)
      .input("PlasticCoveringId", body.PlasticCoveringId)
      .input("AppearanceCheckId", body.AppearanceCheckId)
      .input("Amount", body.Amount)
      .input("FinesAmount", body.FinesAmount)
      .input("DefectId", body.DefectId)
      .input("Qty", body.Qty)
      .input("ResultId", body.ResultId)
      .input("StatusId", body.StatusId)
      .input("DefectTable", defectTable)

      .output("pReturnId")
      .output("pStatus")
      .output("pMessage")
      .output("pMailTemplate")
      .output("pMailFrom")
      .output("pMailTo")
      .output("pMailCc")

      .execute(step2_insertUpdate);

    return res;
  }

  async getAfterWeightStep3(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)

      .output("pStatus")
      .output("pMessage")

      .execute(step3_get);

    return res;
  }

  async afterWeightStep3InsertUpdate(param) {
    let body = param.body;

    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)
      .input("CheckinId", body.CheckinId)
      .input("DRC_USS", body.DRC_USS)
      .input("Spec_USS", body.Spec_USS)
      .input("DRC_RSS", body.DRC_RSS)
      .input("Spec_RSS", body.Spec_RSS)
      .input("ResultId", body.ResultId)
      .input("StatusId", body.StatusId)

      .output("pReturnId")
      .output("pStatus")
      .output("pMessage")
      .output("pMailTemplate")
      .output("pMailFrom")
      .output("pMailTo")
      .output("pMailCc")

      .execute(step3_insertUpdate);

    return res;
  }

  async getAfterWeightStep4(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)

      .output("pStatus")
      .output("pMessage")

      .execute(step4_get);

    return res;
  }

  async afterWeightStep4InsertUpdate(param) {
    let body = param.body;

    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)
      .input("CheckinId", body.CheckinId)
      .input("WeightReturn", body.WeightReturn)
      .input("PersentReturn", body.PersentReturn)
      .input("Fines", body.Fines)
      .input("FinesDiscount", body.FinesDiscount)
      .input("ActualFine", body.ActualFine)
      .input("OtherFines", body.OtherFines)
      .input("TotalActualFines", body.TotalActualFines)
      .input("TruckConditionId", body.TruckConditionId)
      .input("DriverOutfitId", body.DriverOutfitId)
      .input("DriverPunctuality", body.DriverPunctuality)
      .input("SafetyId", body.SafetyId)
      .input("EnvironmentId", body.EnvironmentId)
      .input("IsApproveRequest", body.IsApproveRequest)
      .input("IsSeparate", body.IsSeparate)
      .input("IsDowngrade", body.IsDowngrade)
      .input("IsOther", body.IsOther)
      .input("Description", body.Description)
      .input("OtherRemark", body.OtherRemark)
      .input("ReqFines", body.ReqFines)
      .input("ApproverId", body.ApproverId)
      .input("IsApproved", body.IsApproved)
      .input("ResultId", body.ResultId)
      .input("StatusId", body.StatusId)

      .output("pReturnId")
      .output("pStatus")
      .output("pMessage")
      .output("pMailTemplate")
      .output("pMailFrom")
      .output("pMailTo")
      .output("pMailCc")

      .execute(step4_insertUpdate);

    return res;
  }

  async getAfterWeightStep4Approval(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)
      .input("EmpId", body.EmpId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_RSS_AfterWeight_Step4_Approval_GetList");

    return res;
  }

  async postAfterWeightStep4Approval(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)
      .input("EmpId", body.EmpId)
      .input("Action", body.Action)
      .input("Description", body.Description)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_RSS_AfterWeight_Step4_Approval_InsertUpdate");

    return res;
  }
}

module.exports = new rsseMssql();