const mssqlcon = require('./connection');

class strMssql {
  async getStep1(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("CheckinId", body.CheckinId)
      .input("SlockId", body.SlockId)
      .input("ProductMaterialId", body.ProductMaterialId)
      .input("RubberCharacterId", body.RubberCharacterId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_StrQcAfterWeight_Step1_GetList");

    return res;
  }

  async postStep1(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("CheckinId", body.CheckinId)
      .input("SlockId", body.SlockId)
      .input("ProductMaterialId", body.ProductMaterialId)
      .input("RubberCharacterId", body.RubberCharacterId)
      .input("TotalRandomCut", body.TotalRandomCut)
      .input("CutGradeA", body.CutGradeA)
      .input("CutGradeB", body.CutGradeB)
      .input("CutGradeC", body.CutGradeC)
      .input("SummaryCutSampleGrade", body.SummaryCutSampleGrade)
      .input("isTestPassed", body.isTestPassed)
      .input('AssignedToRole', body.AssignedToRole)
      .input('AssignedToEmp', body.AssignedToEmp)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")
      .output("pMailTemplate")
      .output("pMailFrom")
      .output("pMailTo")
      .output("pMailCc")

      .execute("USP_Req_StrQcAfterWeight_Step1_InsertUpdate");

    return res;
  }

  async getStep2(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_StrQcAfterWeight_Step2_GetList");

    return res;
  }

  async postStep2(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("CheckinId", body.CheckinId)
      .input("ReqId", body.ReqId)
      .input("TotalRandomToluene", body.TotalRandomToluene)
      .input("FoundWornSampleAdded", body.FoundWornSampleAdded)
      .input("FoundWornSamplePass", body.FoundWornSamplePass)
      .input("FoundWornSampleTFound", body.FoundWornSampleTFound)
      .input("FoundWornSampleDecadentFound", body.FoundWornSampleDecadentFound)
      .input("DeadRubberWeight", body.DeadRubberWeight)
      .input("DecadentRubberWeight", body.DecadentRubberWeight)
      .input("TolueneTestResult", body.TolueneTestResult)
      .input("isTestPassed", body.isTestPassed)
      .input("isQualityBlock", body.isQualityBlock)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")
      .output("pMailTemplate")
      .output("pMailFrom")
      .output("pMailTo")
      .output("pMailCc")

      .execute("USP_Req_StrQcAfterWeight_Step2_InsertUpdate");

    return res;
  }

  async getStep2TolueneTest(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("StepId", body.StepId)
      .input("RubberShapeId", body.RubberShapeId)
      .input("ColorId", body.ColorId)
      .input("TolueneTestId", body.TolueneTestId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_StrQcAfterWeight_Step2_TolueneTest_GetList");

    return res;
  }

  async postStep2TolueneTest(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("StepId", body.StepId)
      .input("RubberShapeId", body.RubberShapeId)
      .input("ColorId", body.ColorId)
      .input("TolueneTestId", body.TolueneTestId)
      .input("DecisionResult", body.DecisionResult)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_StrQcAfterWeight_Step2_TolueneTest_InsertUpdate");

    return res;
  }

  async getStep3(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_StrQcAfterWeight_Step3_GetList");

    return res;
  }

  async postStep3(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("CheckinId", body.CheckinId)
      .input("ReqId", body.ReqId)
      .input("TotalRandomSulphate", body.TotalRandomSulphate)
      .input("SulphateTestResult", body.SulphateTestResult)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")
      .output("pMailTemplate")
      .output("pMailFrom")
      .output("pMailTo")
      .output("pMailCc")

      .execute("USP_Req_StrQcAfterWeight_Step3_InsertUpdate");

    return res;
  }

  async getStep3SulphateTest(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("StepId", body.StepId)
      .input("SolutionResultId", body.SolutionResultId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_StrQcAfterWeight_Step3_SulphateTest_GetList");

    return res;
  }

  async postStep3SulphateTest(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("StepId", body.StepId)
      .input("SolutionResultId", body.SolutionResultId)
      .input("TestSummary", body.TestSummary)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_StrQcAfterWeight_Step3_SulphateTest_InsertUpdate");

    return res;
  }

  async getStep4(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)
      .input("DiscountEmpId", body.DiscountEmpId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_StrQcAfterWeight_Step4_GetList");

    return res;
  }

  async postStep4(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("CheckinId", body.CheckinId)
      .input("ReqId", body.ReqId)
      .input("isContaminantFound", body.isContaminantFound)
      .input("TotalStandardFine", body.TotalStandardFine)
      .input("FineDiscount", body.FineDiscount)
      .input("ActualFine", body.ActualFine)
      .input("isRequestDiscount", body.isRequestDiscount)
      .input("DiscountEmpId", body.DiscountEmpId)
      .input("Description", body.Description)
      .input("isDiscountApproved", body.isDiscountApproved)
      .input("ReturnLataxWeight", body.ReturnLataxWeight)
      .input("ReturnLataxWeightPercentage", body.ReturnLataxWeightPercentage)
      .input("isFinesAccepted", body.isFinesAccepted)
      .input("isQualityBlock", body.isQualityBlock)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")
      .output("pMailTemplate")
      .output("pMailFrom")
      .output("pMailTo")
      .output("pMailCc")

      .execute("USP_Req_StrQcAfterWeight_Step4_InsertUpdate");

    return res;
  }

  async getStep4Approval(param) {
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

      .execute("USP_Req_StrQcAfterWeight_Step4_Approval_GetList");

    return res;
  }

  async postStep4Approval(param) {
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

      .execute("USP_Req_StrQcAfterWeight_Step4_Approval_InsertUpdate");

    return res;
  }

  async getStep4ContaminantCheck(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("StepId", body.StepId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_StrQcAfterWeight_Step4_ContaminantCheck_GetList");

    return res;
  }

  async postStep4ContaminantCheck(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("StepId", body.StepId)
      .input("ContaminantItem", body.ContaminantItem)
      .input("isContaminantOther", body.isContaminantOther)
      .input("ContaminantOtherName", body.ContaminantOtherName)
      .input("ContaminantFound", body.ContaminantFound)
      .input("ContaminantColor", body.ContaminantColor)
      .input("ContaminantShape", body.ContaminantShape)
      .input("ContaminantSize", body.ContaminantSize)
      .input("isInOutSize", body.isInOutSize)
      .input("isCompletePiece", body.isCompletePiece)
      .input("StandardFineUnit", body.StandardFineUnit)
      .input("StandardFine", body.StandardFine)
      .input("ActualFine", body.ActualFine)
      .input("PersonalOrTeam", body.PersonalOrTeam)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_StrQcAfterWeight_Step4_ContaminantCheck_InsertUpdate");

    return res;
  }

  async getStep4ContaminantCheckEmployee(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("Id", body.Id)
      .input("ReqId", body.ReqId)
      .input("QcContaminantId", body.QcContaminantId)
      .input("EmpId", body.EmpId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_StrQcAfterWeight_Step4_ContaminantCheck_Employee_GetList");

    return res;
  }

  async postStep4ContaminantCheckEmployee(param) {
    let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("Code", body.Code)
      .input("ReqId", body.ReqId)
      .input("QcContaminantId", body.QcContaminantId)
      .input("EmpId", body.EmpId)
      .input("Status", body.Status)

      .output("pId")
      .output("pStatus")
      .output("pMessage")

      .execute("USP_Req_StrQcAfterWeight_Step4_ContaminantCheck_Employee_InsertUpdate");

    return res;
  }
}

module.exports = new strMssql();