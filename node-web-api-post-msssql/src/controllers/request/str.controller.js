const strService = require('../../services/request/str.service');

class strController {
  async getStep1(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: GetAll, getbyid'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrQcAfterWeightStep1" } } */
    res.send(await strService.getStep1(req));
  }

  async postStep1(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrQcAfterWeightStep1" } } */
    res.send(await strService.postStep1(req));
  }
  
  async getStep2(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: GetAll, getbyid, getbyreqid'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrQcAfterWeightStep2" } } */
    res.send(await strService.getStep2(req));
  }

  async postStep2(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrQcAfterWeightStep2" } } */
    res.send(await strService.postStep2(req));
  }

  async getStep2TolueneTest(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: GetAll, getbyid, getbystepid'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrQcAfterWeightStep2TolueneTest" } } */
    res.send(await strService.getStep2TolueneTest(req));
  }

  async postStep2TolueneTest(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrQcAfterWeightStep2TolueneTest" } } */
    res.send(await strService.postStep2TolueneTest(req));
  }

  async getStep3(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: GetAll, getbyid, getbyreqid'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrQcAfterWeightStep3" } } */
    res.send(await strService.getStep3(req));
  }

  async postStep3(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrQcAfterWeightStep3" } } */
    res.send(await strService.postStep3(req));
  }
  
  async getStep3SulphateTest(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: GetAll, getbyid, getbystepid'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrQcAfterWeightStep3SulphateTest" } } */
    res.send(await strService.getStep3SulphateTest(req));
  }
  
  async postStep3SulphateTest(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrQcAfterWeightStep3SulphateTest" } } */
    res.send(await strService.postStep3SulphateTest(req));
  }
  
  async getStep4(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: GetAll, getbyid, getbyreqid'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrQcAfterWeightStep4" } } */
    res.send(await strService.getStep4(req));
  }

  async postStep4(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrQcAfterWeightStep4" } } */
    res.send(await strService.postStep4(req));
  }

  async getStep4ContaminantCheck(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: GetAll, getbyid, getbystepid'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrQcAfterWeightStep4ContaminantCheck" } } */
    res.send(await strService.getStep4ContaminantCheck(req));
  }

  async postStep4ContaminantCheck(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrQcAfterWeightStep4ContaminantCheck" } } */
    res.send(await strService.postStep4ContaminantCheck(req));
  }

  async getStep4ContaminantCheckEmployee(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: GetAll, getbyid, getbycontaminantid'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrQcAfterWeightStep4ContaminantCheckEmployee" } } */
    res.send(await strService.getStep4ContaminantCheckEmployee(req));
  }

  async postStep4ContaminantCheckEmployee(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrQcAfterWeightStep4ContaminantCheckEmployee" } } */
    res.send(await strService.postStep4ContaminantCheckEmployee(req));
  }

  async getStep4Approval(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: GetAll, getbyid, getddl'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrQcAfterWeightStep4Approval" } } */
    res.send(await strService.getStep4Approval(req));
  }

  async postStep4Approval(req, res) {
    /*  #swagger.tags = ['StrQcAfterWeight']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrQcAfterWeightStep4Approval" } } */
    res.send(await strService.postStep4Approval(req));
  }
}

module.exports = new strController();