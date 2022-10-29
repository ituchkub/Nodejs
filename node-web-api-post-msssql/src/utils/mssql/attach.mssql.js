const mssqlcon = require('./connection');

class attachMssql {
  async insertAttachPath(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpID", req.SessionEmpID)

      .input("AttachID", body.AttachID)
      .input("AttachList", body.AttachList)
      .input("ReqID", body.ReqID)
      .input("CusID", body.CusID)
      .input("SeqID", body.SeqID)
      .input("Year", body.Year)
      .input("Month", body.Month)
      .input("ProductID", body.ProductID)
      .input("Form", body.Form)
      .input("PathFull", body.PathFull)
      .input("RootPath", body.RootPath)   
      .input("PathName", body.PathName)
      .input("FileName", body.FileName)
      .input("Extention", body.Extention)
      .input("SELLER_TAX_ID", body.SELLER_TAX_ID)
      .input("DOCUMENT_ID", body.DOCUMENT_ID)
      .input("DOCUMENT_TYPE_CODE", body.DOCUMENT_TYPE_CODE)

      .output("pReturnId")
      .output("pStatus")
      .output("pMessage")
      
      .execute("USP_INF_AttachFile");

    return res;
  }

  async getAttachPath(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpID", req.SessionEmpID)

      .input("AttachID", body.AttachID)
      .input("AttachList", body.AttachList)
      .input("ReqID", body.ReqID)
      .input("CusID", body.CusID)
      .input("SeqID", body.SeqID)
      .input("Form", body.Form)

      .output("pReturnId")
      .output("pStatus")
      .output("pMessage")
        
      .execute("USP_INF_AttachFile");

    return res;
  }

  async deleteAttachPath(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpID", req.SessionEmpID)

      .input("AttachID", body.AttachID)
      .input("AttachList", body.AttachList)
      .input("ReqID", body.ReqID)
      .input("CusID", body.CusID)
      .input("SeqID", body.SeqID)
      .input("Form", body.Form)

      .output("pReturnId")
      .output("pStatus")
      .output("pMessage")
        
      .execute("USP_INF_AttachFile");

    return res;
  }
}
module.exports = new attachMssql();