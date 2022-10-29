const rssService = require('../../services/request/rss.service');
const attach = require('../../utils/attach.service')

class rssController {
  async getBeforeWeigthById(req, res) {
    /* 	#swagger.tags = ['RSS']
    /* 	#swagger.description = 'module: getall, getbyid'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetRssBefore" } } */

    res.send(await rssService.getBeforeWeigthById(req));
  }

  async beforeWeightInsertUpdate(req, res) {
    /* 	#swagger.tags = ['RSS']
    /* 	#swagger.description = 'module: insert, update'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostRssBefore" } } */

    res.send(await rssService.beforeWeightInsertUpdate(req));
  }

  async getAfterWeightInfoStep1(req, res) {
    /* 	#swagger.tags = ['RSS']
    /* 	#swagger.description = 'module: getall, GetByReqId, getstepcheck'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetRssAfterStep1" } } */

    res.send(await rssService.getAfterWeightInfoStep1(req));
  }

  async afterWeightStep1InsertUpdate(req, res) {
    /* 	#swagger.tags = ['RSS']
    /* 	#swagger.description = 'module: insert, update'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostRssAfterStep1" } } */

    res.send(await rssService.afterWeightStep1InsertUpdate(req));
  }

  async getAfterWeightInfoStep2(req, res) {
    /* 	#swagger.tags = ['RSS']
    /* 	#swagger.description = 'module: GetByReqId, GetPanel, GetDefect'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetRssAfterStep2" } } */

    res.send(await rssService.getAfterWeightInfoStep2(req));
  }

  async afterWeightStep2InsertUpdate(req, res) {
    /* 	#swagger.tags = ['RSS']
    /* 	#swagger.description = 'module: InserUpdate'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostRssAfterStep2" } } */

    res.send(await rssService.afterWeightStep2InsertUpdate(req));
  }

  async getAfterWeightInfoStep3(req, res) {
    /* 	#swagger.tags = ['RSS']
    /* 	#swagger.description = 'module: GetAll, GetByReqId'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetRssAfterStep3" } } */

    res.send(await rssService.getAfterWeightInfoStep3(req));
  }

  async afterWeightStep3InsertUpdate(req, res) {
    /* 	#swagger.tags = ['RSS']
    /* 	#swagger.description = 'module: insert, update'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostRssAfterStep3" } } */

    res.send(await rssService.afterWeightStep3InsertUpdate(req));
  }

  async getAfterWeightInfoStep4(req, res) {
    /* 	#swagger.tags = ['RSS']
    /* 	#swagger.description = 'module: getall, getbyid'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetRssAfterStep4" } } */

    res.send(await rssService.getAfterWeightInfoStep4(req));
  }

  async afterWeightStep4InsertUpdate(req, res) {
    /* 	#swagger.tags = ['RSS']
    /* 	#swagger.description = 'module: insert, update'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostRssAfterStep4" } } */

    res.send(await rssService.afterWeightStep4InsertUpdate(req));
  }

  async getAfterWeightStep4Approval(req, res) {
    /*  #swagger.tags = ['RSS']
    /*  #swagger.description = 'Module: GetAll, getbyid, getddl'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetRssAfterStep4Approval" } } */
    res.send(await rssService.getAfterWeightStep4Approval(req));
  }

  async postAfterWeightStep4Approval(req, res) {
    /*  #swagger.tags = ['RSS']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostRssAfterStep4Approval" } } */
    res.send(await rssService.postAfterWeightStep4Approval(req));
  }

  async testAfterStep2(req, res) {
    res.send(await rssService.testAfterStep2(req));
  }
}

module.exports = new rssController();
