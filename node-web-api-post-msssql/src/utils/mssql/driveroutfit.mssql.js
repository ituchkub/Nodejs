const mssqlcon = require('./connection');

const driverOutfitGet = 'USP_MAS_RssDriverOutfit_GetList';

class driverOutfitMssql {
  async getList(req) {
    let body = req.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", req.Module)
      .input("SessionEmpId", req.SessionEmpId)

      .input("Id", body.Id)

      .output("pStatus")
      .output("pMessage")
      
      .execute(driverOutfitGet);

    return res;
  }
}

module.exports = new driverOutfitMssql();