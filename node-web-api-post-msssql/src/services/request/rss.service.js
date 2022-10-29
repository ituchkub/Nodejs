const rssMssql = require('../../utils/mssql/rss.mssql');
const attachMssql = require('../../utils/mssql/attach.mssql')

class rssService {
  async getBeforeWeigthById(req) {
    try {
      const output = await rssMssql.beforeWeightGetList(req.body);
      if(output.output.pStatus != 1) throw output.output.pMessage;
      
      let res = {
        status: true,
        data: output.recordset,
        message: output.output.pMessage
      }

      return res;
    }
    catch (error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }

  async beforeWeightInsertUpdate(req) {
    try {
      const output = await rssMssql.beforeWeightInsertUpdate(req.body);
      if(output.output.pStatus != 1) throw output.output.pMessage;

      let res = {
        status: true,
        data: output.recordset,
        pid: output.output.pReturnId,
        message: output.output.pMessage,
        mailTemplate: output.output.pMailTemplate,
        mailFrom: output.output.pMailFrom,
        mailTo: output.output.pMailTo,
        mailCc: output.output.pMailCc
      }

      return res;
    }
    catch(error) {
      return {status: false, message: error.message ? error.message : error}
    }

    
  }

  async getAfterWeightInfoStep1(req) {
    try {
      const output = await rssMssql.getAfterWeightStep1(req.body);
      if(output.output.pStatus != 1) throw output.output.pMessage;

      let res = {
        status: true,
        data: output.recordset,
        message: output.output.pMessage
      }
  
      return res;
    } 
    catch(error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }

  async afterWeightStep1InsertUpdate(req) {
    try {
      const output = await rssMssql.afterWeightStep1InsertUpdate(req.body);
      if(output.output.pStatus != 1) throw output.output.pMessage;

      let res = {
        status: true,
        data: output.recordset,
        pid: output.output.pReturnId,
        message: output.output.pMessage,
        mailTemplate: output.output.pMailTemplate,
        mailFrom: output.output.pMailFrom,
        mailTo: output.output.pMailTo,
        mailCc: output.output.pMailCc
      }

      return res;
    } 
    catch(error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }

  async getAfterWeightInfoStep2(req) {
    try {
      let _data = {};
      let res = {
        status: true,
        data: _data,
        message: 'Success.'
      }

      const outputInfo = await rssMssql.getAfterWeightStep2(req.body);
      if(outputInfo.output.pStatus != 1) throw outputInfo.output.pMessage;
      if(outputInfo.recordset.length == 0) {
        res.data = _data = {}
        return res
      }

      _data = outputInfo.recordset[0];

      req.body.Module = 'GetPanel';
      const outputPanel = await rssMssql.getAfterWeightStep2(req.body);
      if(outputPanel.output.pStatus != 1) throw outputPanel.output.pMessage;
      if(outputPanel.recordset.length == 0) {
        _data.Panels = []
        res.data = _data = {}
        return res
      }

      _data.Panels = outputPanel.recordset;

      req.body.Module = 'GetDefect';
      for(let [i, panel] of _data.Panels.entries()) {
        req.body.body.PanelId = panel.Id;
        const outputDefect = await rssMssql.getAfterWeightStep2(req.body);
        if(outputDefect.output.pStatus != 1) throw outputPanel.output.pMessage;
          
        _data.Panels[i].Defects = outputDefect.recordset;
      }

      res.data = _data
      res.message = outputInfo.output.pMessage

      return res;
    }
    catch (error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }

  async afterWeightStep2InsertUpdate(req) {
    try {
      let res = {
        status: true,
        data: null,
        pid: 0,
        message: ''
      }

      const outputInfo = await rssMssql.afterWeightStep2InsertUpdate(req.body);
      if(outputInfo.output.pStatus != 1) throw outputInfo.output.pMessage;

      req.body.Module = 'InsertUpdatePanelAndDefect';
      let _panels = req.body.body.Panels;
      if(_panels != null && _panels != 0) {
        for(let panel of _panels) {
          let keys = Object.keys(panel);
          let _body = req.body.body;

          _body.PanelId = panel.Id
          keys.map(key => { if(!['Id', 'ReqId', 'CheckinId'].includes(key)) _body[key] = panel[key] });
          _body.DefectTable = panel.Defects

          const outputPanel = await rssMssql.afterWeightStep2InsertUpdate(req.body);
          if(outputPanel.output.pStatus != 1) throw outputPanel.output.pMessage;
        }
      }
      
      res.message = outputInfo.output.pMessage
      res.pid = outputInfo.output.pReturnId
      res.message = outputInfo.output.pMessage
      res.mailTemplate = outputInfo.output.pMailTemplate
      res.mailFrom = outputInfo.output.pMailFrom
      res.mailTo = outputInfo.output.pMailTo
      res.mailCc = outputInfo.output.pMailCc

      return res;
    }
    catch(error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }

  async getAfterWeightInfoStep3(req) {
    try {
      const output = await rssMssql.getAfterWeightStep3(req.body);
      if(output.output.pStatus != 1) throw output.output.pMessage;

      let res = {
        status: true,
        data: output.recordset,
        message: output.output.pMessage
      }
  
      return res;
    } 
    catch(error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }

  async afterWeightStep3InsertUpdate(req) {
    try {
      const output = await rssMssql.afterWeightStep3InsertUpdate(req.body);
      if(output.output.pStatus != 1) throw output.output.pMessage;

      let res = {
        status: true,
        data: output.recordset,
        pid: output.output.pReturnId,
        message: output.output.pMessage,
        mailTemplate: output.output.pMailTemplate,
        mailFrom: output.output.pMailFrom,
        mailTo: output.output.pMailTo,
        mailCc: output.output.pMailCc
      }

      return res;
    } 
    catch(error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }

  async getAfterWeightInfoStep4(req) {
    try {
      const output = await rssMssql.getAfterWeightStep4(req.body);
      if(output.output.pStatus != 1) throw output.output.pMessage;

      let res = {
        status: true,
        data: output.recordset,
        message: output.output.pMessage
      }
  
      return res;
    } 
    catch(error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }

  async afterWeightStep4InsertUpdate(req) {
    try {
      const output = await rssMssql.afterWeightStep4InsertUpdate(req.body);
      if(output.output.pStatus != 1) throw output.output.pMessage;

      let res = {
        status: true,
        data: output.recordset,
        pid: output.output.pReturnId,
        message: output.output.pMessage,
        mailTemplate: output.output.pMailTemplate,
        mailFrom: output.output.pMailFrom,
        mailTo: output.output.pMailTo,
        mailCc: output.output.pMailCc
      }

      return res;
    } 
    catch(error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }

  async getAfterWeightStep4Approval(req) {
    try {
      const output = await rssMssql.getAfterWeightStep4Approval(req.body);

      if (output.output.pStatus != 1) {
        throw output.output.pMessage;
      }

      let res = {
        status: true,
        data: output.recordset,
        message: output.output.pMessage
      }

      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message ? error.message : error
      }
    }
  }

  async postAfterWeightStep4Approval(req) {
    try {
      const output = await rssMssql.postAfterWeightStep4Approval(req.body);

      if (output.output.pStatus != 1) {
        throw output.output.pMessage;
      }

      let res = {
        status: true,
        pid: output.output.pId,
        message: output.output.pMessage
      }

      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message ? error.message : error
      }
    }
  }

  async testAfterStep2(req) {
    try {
      const output = await rssMssql.afterWeightStep2InsertUpdate(req.body);

      let res = {}
      if(output.output.pStatus == 1) {
        res.status = true
        res.data = output.recordset
        res.message = output.output.pMessage
      } else {
        res.status = false
        res.data = null
        res.message = 'output: ' + output.output.pMessage
      }

      return res;
    }
    catch(error) {
      return {status: false, message: error.message};
    }
  }

}

module.exports = new rssService();