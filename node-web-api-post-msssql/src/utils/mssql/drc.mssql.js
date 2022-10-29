const mssqlcon = require('./connection');
const tbType = require('../mssql/tabletype.mssql')

const drcGet = 'USP_Req_StrDrcAfterWeight_GetList';
const drcInsertUpdate = 'USP_Req_StrDrcAfterWeight_InsertUpdate';
const drcInterface = 'USP_INF_StrDrcWeight';

class drcMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)
      .input("CheckinId", body.CheckinId)

      .input("PageNo", req.PageNo || 1)
      .input("PageSize", req.PageSize || 10)
      .input("PageOrder", req.PageOrder || '')
      .input("PageSort", req.PageSort || '')

      .output("pStatus")
      .output("pMessage")

      .execute(drcGet);

    return res;
  }

  async insertUpdate(req) {
    let body = req.body;
    let weightTest = tbType.TYPE_DrcWeightTest(body.WeightTest || [])

    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input('Id', body.Id)
      .input('Code', body.Code)
      .input('CheckinId', body.CheckinId)
      .input('MaterialId', body.MaterialId)
      .input('BatchSlip', body.BatchSlip)
      .input('Province', body.Province)
      .input('District', body.District)
      .input('SubDistrict', body.SubDistrict)
      .input('DrainCheck', body.DrainCheck)
      .input('BatchSloc', body.BatchSloc)
      .input('Sloc', body.Sloc)
      .input('Lump', body.Lump)
      .input('Cup', body.Cup)
      .input('MaterialMixed', body.MaterialMixed)
      .input('Crep', body.Crep)
      .input('Rubber', body.Rubber)
      .input('Wood', body.Wood)
      .input('GradeMixed', body.GradeMixed)
      .input('Dry', body.Dry)
      .input('Damp', body.Damp)
      .input('Freash', body.Freash)
      .input('LevelMixed', body.LevelMixed)
      .input('DeductWeight', body.DeductWeight)
      .input('DeductWater', body.DeductWater)
      .input('DeductWood', body.DeductWood)
      .input('AssessmentResults', body.AssessmentResults)
      .input('DRCVisual', body.DRCVisual)
      .input('DRCTest', body.DRCTest)
      .input('DRCResult', body.DRCResult)
      .input('DRCApproval', body.DRCApproval)
      .input('MaxDRCApproval', body.MaxDRCApproval)
      .input('DRCRequest', body.DRCRequest)
      .input('isWeightRubberTest', body.isWeightRubberTest)
      .input('isSkipRubberTest', body.isSkipRubberTest)
      .input('isSkipRubberTestApproved', body.isSkipRubberTestApproved)
      .input('isSkipDrcApproved', body.isSkipDrcApproved)
      .input('AssignedToRole', body.AssignedToRole)
      .input('AssignedToEmp', body.AssignedToEmp)
      .input('Step', body.Step)
      .input('StatusId', body.StatusId)
      .input("Description", body.Description)
      .input('Remark', body.Remark)
      .input('WeightTest', weightTest)

      .output("pId")
      .output("pStatus")
      .output("pMessage")
      .output("pMailTemplate")
      .output("pMailFrom")
      .output("pMailTo")
      .output("pMailCc")

      .execute(drcInsertUpdate);

    return res;
  }

  async getApproval(param) {
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

      .execute("USP_Req_StrDrcAfterWeight_Approval_GetList");

    return res;
  }

  async postApproval(param) {
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

      .execute("USP_Req_StrDrcAfterWeight_Approval_InsertUpdate");

    return res;
  }

  async interface(req) {
    let body = req.body || {};
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)
      .input("CheckinId", body.CheckinId)
      .input("CheckinProfileId", body.CheckinProfileId)
      .input("PlantId", body.PlantId)
      .input("SampleNo", body.SampleNo)
      .input("Req_ID", body.Req_ID)
      .input("Weight_After", body.Weight_After)
      .input("EmpCode", body.EmpCode)

      .output("pStatus")
      .output("pMessage")

      .execute(drcInterface);

    return res;
  }
}

module.exports = new drcMssql();