const mssqlcon = require('./connection');
const tbType = require('../mssql/tabletype.mssql')

class ltxMssql {
  async getStep1(param) {
    try {
      let body = param.body;
      const conn = await mssqlcon.getConnection();
      const res = await conn.request()
        .input("Module", param.Module)
        .input("SessionEmpId", param.SessionEmpId)

        .input("Id", body.Id)
        .input("Code", body.Code)
        .input("CheckinId", body.CheckinId)
        .input("VendorId", body.VendorId)
        .input("AssignedToRole", body.AssignedToRole)
        .input("RandomnessApproverId", body.RandomnessApproverId)
        .input("ConditionsApproverId", body.ConditionsApproverId)

        .input("PageNo", param.PageNo || 1)
        .input("PageSize", param.PageSize || 999)
        .input("PageOrder", param.PageOrder || '')
        .input("PageSort", param.PageSort || '')

        .output("pStatus")
        .output("pMessage")

        .execute("USP_Req_LtxAfterWeight_Step1_GetList");

      return res;

    } catch (error) {
      throw new Error(error.message)
    }
  }

  async updateStep1(param) {
    try {
      let body = param.body;
      const conn = await mssqlcon.getConnection();
      const res = await conn.request()
        .input("Module", param.Module)
        .input("SessionEmpId", param.SessionEmpId)

        .input("Id", body.Id)
        .input("Code", body.Code)
        .input("CheckinId", body.CheckinId)
        .input("VendorId", body.VendorId)
        .input("isFreshLatex", body.isFreshLatex)
        .input("isRottenSmell", body.isRottenSmell)
        .input("isRottenContaminated", body.isRottenContaminated)
        .input("isLatexPhysicalPassed", body.isLatexPhysicalPassed)
        .input("isLatexNotOverflow", body.isLatexNotOverflow)
        .input("isStirLatex", body.isStirLatex)
        .input("isLatexPackingPassed", body.isLatexPackingPassed)
        .input("DRC", body.DRC)
        .input("RandomnessApproverId", body.RandomnessApproverId)
        .input("isRandomnessApproved", body.isRandomnessApproved)
        .input("RandomnessDescription", body.RandomnessDescription)
        .input("ConditionsApproverId", body.ConditionsApproverId)
        .input("isConditionsApproved", body.isConditionsApproved)
        .input("ConditionsDescription", body.ConditionsDescription)
        .input("isStickerPrinted", body.isStickerPrinted)
        .input("isQualityBlock", body.isQualityBlock)
        .input("isReturn", body.isReturn)
        .input("isReject", body.isReject)
        .input("Step", body.Step)
        .input("Status", body.Status)
        .input("Description", body.Description)

        .output("pId")
        .output("pStatus")
        .output("pMessage")
        .output("pMailTemplate")
        .output("pMailFrom")
        .output("pMailTo")
        .output("pMailCc")

        .execute("USP_Req_LtxAfterWeight_Step1_InsertUpdate");

      return res;

    } catch (error) {
      throw new Error(error.message)
    }
  }

  async getStep1ConditionDetail(param) {
    try {
      let body = param.body;
      const conn = await mssqlcon.getConnection();
      const res = await conn.request()
        .input("Module", param.Module)
        .input("SessionEmpId", param.SessionEmpId)

        .input("Id", body.Id)

        .output("pStatus")
        .output("pMessage")

        .execute("USP_Req_LtxAfterWeight_Step1_ConditionDetail_GetList");

      return res;

    } catch (error) {
      throw new Error(error.message)
    }
  }

  async updateStep1ConditionDetail(param) {
    try {
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

        .execute("USP_Req_LtxAfterWeight_Step1_ConditionDetail_InsertUpdate");

      return res;

    } catch (error) {
      throw new Error(error.message)
    }
  }

  async getStep1RandomnessDetail(param) {
    try {
      let body = param.body;
      const conn = await mssqlcon.getConnection();
      const res = await conn.request()
        .input("Module", param.Module)
        .input("SessionEmpId", param.SessionEmpId)

        .input("Id", body.Id)

        .output("pStatus")
        .output("pMessage")

        .execute("USP_Req_LtxAfterWeight_Step1_RandomnessDetail_GetList");

      return res;

    } catch (error) {
      throw new Error(error.message)
    }
  }

  async updateStep1RandomnessDetail(param) {
    try {
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

        .execute("USP_Req_LtxAfterWeight_Step1_RandomnessDetail_InsertUpdate");

      return res;

    } catch (error) {
      throw new Error(error.message)
    }
  }

  async getStep2(param) {
    try {
      let body = param.body;
      const conn = await mssqlcon.getConnection();
      const res = await conn.request()
        .input("Module", param.Module)
        .input("SessionEmpId", param.SessionEmpId)

        .input("Id", body.Id)

        .output("pStatus")
        .output("pMessage")

        .execute("USP_Req_LtxAfterWeight_Step2_GetList");

      return res;

    } catch (error) {
      throw new Error(error.message)
    }
  }

  async updateStep2(param) {
    try {
      let body = param.body;
      const conn = await mssqlcon.getConnection();
      const res = await conn.request()
        .input("Module", param.Module)
        .input("SessionEmpId", param.SessionEmpId)

        .input("Id", body.Id)
        .input("CheckinId", body.CheckinId)
        .input("VendorId", body.VendorId)
        .input("isInRandomCriterion", body.isInRandomCriterion)
        .input("Nh3Value", body.Nh3Value)
        .input("isConductivity", body.isConductivity)
        .input("VfaNumber", body.VfaNumber)
        .input("Formalin", body.Formalin)
        .input("SummaryTestResult", body.SummaryTestResult)
        .input("RandomnessApproverId", body.RandomnessApproverId)
        .input("isRandomnessApproved", body.isRandomnessApproved)
        .input("RandomnessDescription", body.RandomnessDescription)
        .input("ConditionsApproverId", body.ConditionsApproverId)
        .input("isConditionsApproved", body.isConditionsApproved)
        .input("ConditionsDescription", body.ConditionsDescription)
        .input("isQualityBlock", body.isQualityBlock)
        .input("isReturn", body.isReturn)
        .input("isReject", body.isReject)
        .input("Step", body.Step)
        .input("Status", body.Status)
        .input("Description", body.Description)

        .output("pId")
        .output("pStatus")
        .output("pMessage")
        .output("pMailTemplate")
        .output("pMailFrom")
        .output("pMailTo")
        .output("pMailCc")

        .execute("USP_Req_LtxAfterWeight_Step2_InsertUpdate");

      return res;

    } catch (error) {
      throw new Error(error.message)
    }
  }

  async getStep3(param) {
    try {
      let body = param.body;
      const conn = await mssqlcon.getConnection();
      const res = await conn.request()
        .input("Module", param.Module)
        .input("SessionEmpId", param.SessionEmpId)

        .input("Id", body.Id)

        .output("pStatus")
        .output("pMessage")

        .execute("USP_Req_LtxAfterWeight_Step3_GetList");

      return res;

    } catch (error) {
      throw new Error(error.message)
    }
  }

  async updateStep3(param) {
    try {
      let body = param.body;
      const conn = await mssqlcon.getConnection();
      const res = await conn.request()
        .input("Module", param.Module)
        .input("SessionEmpId", param.SessionEmpId)

        .input("Id", body.Id)
        .input("CheckinId", body.CheckinId)
        .input("VendorId", body.VendorId)
        .input("SlockId", body.SlockId)
        .input("isTightLid", body.isTightLid)
        .input("isTankNotDamaged", body.isTankNotDamaged)
        .input("isNoAdditionalTankExtend", body.isNoAdditionalTankExtend)
        .input("isNoWaterInHose", body.isNoWaterInHose)
        .input("isValveNoLeaks", body.isValveNoLeaks)
        .input("isNoOldRubber", body.isNoOldRubber)
        .input("isGoodStirringBaffle", body.isGoodStirringBaffle)
        .input("isResultApproved", body.isResultApproved)
        .input("Description", body.Description)
        .input("AssignedToRole", body.AssignedToRole)
        .input("AssignedToEmp", body.AssignedToEmp)
        .input("isApproved", body.isApproved)
        .input("RandomnessApproverId", body.RandomnessApproverId)
        .input("isRandomnessApproved", body.isRandomnessApproved)
        .input("RandomnessDescription", body.RandomnessDescription)
        .input("ConditionsApproverId", body.ConditionsApproverId)
        .input("isConditionsApproved", body.isConditionsApproved)
        .input("ConditionsDescription", body.ConditionsDescription)
        .input("isStickerPrinted", body.isStickerPrinted)
        .input("isQualityBlock", body.isQualityBlock)
        .input("isReturn", body.isReturn)
        .input("isReject", body.isReject)
        .input("Step", body.Step)
        .input("Status", body.Status)

        .output("pId")
        .output("pStatus")
        .output("pMessage")
        .output("pMailTemplate")
        .output("pMailFrom")
        .output("pMailTo")
        .output("pMailCc")
        
        .execute("USP_Req_LtxAfterWeight_Step3_InsertUpdate");

      return res;

    } catch (error) {
      throw new Error(error.message)
    }
  }

  async interface(param) {
    try {
      let body = param.body;
      if(!body.StickerList) throw 'Invalid Sticker List'

      // let stk = body.Sticker_ID
      // stk = stk.replace('-T', '')
      // stk = stk.replace('-L', '')
      // let spliter = [stk.slice(0, 2), stk.slice(2)]
      // let docNumber = `SMR-${spliter[0]}-${spliter[1]}`
      // let docNumber = stk
      
      const conn = await mssqlcon.getConnection();
      const res = await conn.request()
        .input("Module", param.Module)
        .input("SessionEmpId", param.SessionEmpId)

        .input("Id", body.Id)
        .input("PlantCode", body.PlantCode)
        .input("BatchNo", body.BatchNo)
        .input("DRC", body.DRC)
        .input("StickerTable", tbType.TYPE_LtxDrcAfterWeight(body.StickerList || []))

        .output("pStatus")
        .output("pMessage")

        .execute("USP_INF_LtxAfterWeight");

      return res;

    } catch (error) {
      throw new Error(error.message ? error.message : error)
    }
  }
}
module.exports = new ltxMssql();