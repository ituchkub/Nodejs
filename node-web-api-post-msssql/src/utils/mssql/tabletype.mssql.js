const mssql = require('mssql');

class tableTypeeMssql {
  TYPE_Defect(data) {
    let table = new mssql.Table();
    table.columns.add('Id', mssql.Int);
    table.columns.add('ReqId', mssql.Int);
    table.columns.add('PanelId', mssql.Int);
    table.columns.add('Number', mssql.Int);
    table.columns.add('DefectId', mssql.Int);
    table.columns.add('ResultId', mssql.Int);
    table.columns.add('Qty', mssql.Float);
    table.columns.add('StatusId', mssql.Int);
    
    data.forEach(item => {
      table.rows.add(
        item.Id,
        item.ReqId,
        item.PanelId,
        item.Number,
        item.DefectId,
        item.ResultId,
        item.Qty,
        item.StatusId
      );
    });
    
    return table
  }

  TYPE_DrcWeightTest(data) {
    let table = new mssql.Table();
    table.columns.add('Id', mssql.Int);
    table.columns.add('ReqId', mssql.Int);
    table.columns.add('BarcodeNo', mssql.NVarChar(50));
    table.columns.add('Weight', mssql.Float);
    table.columns.add('CLConditionId', mssql.Int);
    table.columns.add('CLConditionValue', mssql.Float);
    table.columns.add('StatusId', mssql.Int);

    data.forEach(item => {
      table.rows.add(
        item.Id,
        item.ReqId,
        item.BarcodeNo,
        item.Weight,
        item.CLConditionId,
        item.CLConditionValue,
        item.StatusId
      );
    });

    return table
  }

  TYPE_EmpRole(data) {
    let table = new mssql.Table();
    table.columns.add('Id', mssql.Int);
    table.columns.add('EmpId', mssql.Int);
    table.columns.add('EmpCode', mssql.NVarChar(50));
    table.columns.add('PlantId', mssql.Int);
    table.columns.add('RoleId', mssql.Int);
    table.columns.add('RoleHeadId', mssql.Int);
    table.columns.add('StatusId', mssql.Int);

    data.forEach(item => {
      table.rows.add(
        item.Id,
        item.EmpId,
        item.EmpCode,
        item.PlantId,
        item.RoleId,
        item.RoleHeadId,
        item.StatusId
      );
    });

    return table
  }

  TYPE_LtxDrcAfterWeight(data) {
    let table = new mssql.Table();
    table.columns.add('Id', mssql.Int);
    table.columns.add('PlantCode', mssql.NVarChar(150));
    table.columns.add('BatchNo', mssql.NVarChar(150));
    table.columns.add('DRC', mssql.Float);

    data.forEach(item => {
      table.rows.add(
        item.Id || 0,
        item.PlantCode,
        item.BatchNo,
        item.DRC
      );
    });

    return table
  }
}

module.exports = new tableTypeeMssql();