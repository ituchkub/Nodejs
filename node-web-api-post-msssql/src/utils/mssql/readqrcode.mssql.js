const mssqlcon = require('./connection');

class readQrCodeMssql {
  async get(param) {
    let body = param.body;
    // ID:STAQR410||TT:1||CL:70-3101,80-7392||SEN:300000696||SUPP:22000375||PT:01||M:FLTX001

    // QR:0||SEQ:1||PID:1060||CNO:0||SNO:0||VENS:1||QBL:0||PT:01||SEN:30000696||SENN:nam surname||SENT:0682228918||SUPP:22000006||SUPP:name surname||M:FLTX001||PRO:TH65||DIS:TH6515||SDIS:TH651501||FT:1||CL:70-3101,80-7392ตง||CLT:01||DUMT:1||PO:3500000001||POI:1||TT:01||DUE:2022-07-05
    // CP:88||VP:221030-00001
    const qrData = body.qrCode.split("||") //["key:value","key:value"]
      .map(pair => pair.split(":")); //[["key","value"],["key","value"]]

    const qrObj = Object.fromEntries(qrData);
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)
      .input("SessionEmpId", param.SessionEmpId)
      .input("PageNo", param.PageNo)
      .input("PageSize", param.PageSize)

      .input("QR", qrObj.QR)
      .input("SEQ", qrObj.SEQ)
      .input("PID", qrObj.PID)
      .input("CNO", qrObj.CNO)
      .input("SNO", qrObj.SNO)
      .input("VENS", qrObj.VENS)
      .input("QBL", qrObj.QBL)
      .input("PT", qrObj.PT)
      .input("SEN", qrObj.SEN)
      .input("SENN", qrObj.SENN)
      .input("SENT", qrObj.SENT)
      .input("SUPP", qrObj.SUPP)
      .input("SUPPN", qrObj.SUPPN)
      .input("M", qrObj.M)
      .input("PRO", qrObj.PRO)
      .input("DIS", qrObj.DIS)
      .input("SDIS", qrObj.SDIS)
      .input("FT", qrObj.FT)
      .input("CL", qrObj.CL)
      .input("CLT", qrObj.CLT)
      .input("DUMT", qrObj.DUMT)
      .input("PO", qrObj.PO)
      .input("POI", qrObj.POI)
      .input("TT", qrObj.TT)
      .input("DUE", qrObj.DUE)

      .input("CP", qrObj.CP)
      .input("VP", qrObj.VP)

      .output("pStatus")
      .output("pType")
      .output("pMessage")

      .execute("USP_INF_ReadQrCode_GetList");

    return res;
  }
}

module.exports = new readQrCodeMssql();