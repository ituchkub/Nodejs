const ltxMssql = require('../../utils/mssql/ltx.mssql');
const email = require('../../utils/email.service')
// const attachMssql = require('../../utils/mssql/attach.mssql')

class ltxService {
  async getStep1(req) {
    try {
      const output = await ltxMssql.getStep1(req.body);

      let res = {}
      if (output.output.pStatus == 1) {
        res.status = true
        res.data = output.recordset
        res.message = output.output.pMessage
      } else {
        res.status = false
        res.message = output.output.pMessage
      }

      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message
      };
    }
  }

  async updateStep1(req) {
    const output = await ltxMssql.updateStep1(req.body);

    let res = {}
    if (output.output.pStatus == 1) {
      res.status = true
      res.pid = output.output.pId
      res.message = output.output.pMessage
      res.mailTemplate = output.output.pMailTemplate
      res.mailFrom = output.output.pMailFrom
      res.mailTo = output.output.pMailTo
      res.mailCc = output.output.pMailCc
      
      email.ltxSendMail(output.output)
    } else {
      res.status = false
      res.message = output.output.pMessage
    }

    return res;
  }

  async getStep1ConditionDetail(req) {
    try {
      const output = await ltxMssql.getStep1ConditionDetail(req.body);

      let res = {}
      if (output.output.pStatus == 1) {
        res.status = true
        res.data = output.recordset
        res.message = output.output.pMessage
      } else {
        res.status = false
        res.message = output.output.pMessage
      }

      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message
      };
    }
  }

  async updateStep1ConditionDetail(req) {
    const output = await ltxMssql.updateStep1ConditionDetail(req.body);

    let res = {}
    if (output.output.pStatus == 1) {
      res.status = true
      res.pid = output.output.pId
      res.message = output.output.pMessage
    } else {
      res.status = false
      res.message = output.output.pMessage
    }

    return res;
  }

  async getStep1RandomnessDetail(req) {
    try {
      const output = await ltxMssql.getStep1RandomnessDetail(req.body);

      let res = {}
      if (output.output.pStatus == 1) {
        res.status = true
        res.data = output.recordset
        res.message = output.output.pMessage
      } else {
        res.status = false
        res.message = output.output.pMessage
      }

      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message
      };
    }
  }

  async updateStep1RandomnessDetail(req) {
    const output = await ltxMssql.updateStep1RandomnessDetail(req.body);

    let res = {}
    if (output.output.pStatus == 1) {
      res.status = true
      res.pid = output.output.pId
      res.message = output.output.pMessage
    } else {
      res.status = false
      res.message = output.output.pMessage
    }

    return res;
  }

  async getStep2(req) {
    try {
      const output = await ltxMssql.getStep2(req.body);

      let res = {}
      if (output.output.pStatus == 1) {
        res.status = true
        res.data = output.recordset
        res.message = output.output.pMessage
      } else {
        res.status = false
        res.message = output.output.pMessage
      }

      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message
      };
    }
  }

  async updateStep2(req) {
    const output = await ltxMssql.updateStep2(req.body);

    let res = {}
    if (output.output.pStatus == 1) {
      res.status = true
      res.pid = output.output.pId
      res.message = output.output.pMessage
      res.mailTemplate = output.output.pMailTemplate
      res.mailFrom = output.output.pMailFrom
      res.mailTo = output.output.pMailTo
      res.mailCc = output.output.pMailCc

      email.ltxSendMail(output.output)
    } else {
      res.status = false
      res.message = output.output.pMessage
    }

    return res;
  }

  async getStep3(req) {
    try {
      const output = await ltxMssql.getStep3(req.body);

      let res = {}
      if (output.output.pStatus == 1) {
        res.status = true
        res.data = output.recordset
        res.message = output.output.pMessage
      } else {
        res.status = false
        res.message = output.output.pMessage
      }

      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message
      };
    }
  }

  async updateStep3(req) {
    const output = await ltxMssql.updateStep3(req.body);

    let res = {}
    if (output.output.pStatus == 1) {
      res.status = true
      res.pid = output.output.pId
      res.message = output.output.pMessage
      res.mailTemplate = output.output.pMailTemplate
      res.mailFrom = output.output.pMailFrom
      res.mailTo = output.output.pMailTo
      res.mailCc = output.output.pMailCc

      email.ltxSendMail(output.output)
    } else {
      res.status = false
      res.message = output.output.pMessage
    }

    return res;
  }

  async interface(req) {
    const output = await ltxMssql.interface(req.body);

    let res = {}
    if (output.output.pStatus == 1) {
      res.status = true
      res.data = output.recordset
      res.message = output.output.pMessage
    } else {
      res.status = false
      res.message = output.output.pMessage
    }

    return res;
  }
}

module.exports = new ltxService();