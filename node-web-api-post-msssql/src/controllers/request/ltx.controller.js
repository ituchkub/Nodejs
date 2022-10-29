const ltxService = require('../../services/request/ltx.service');
// const attach = require('../../utils/attach.service')

class ltxController {
  async getStep1(req, res) {
    /* 	#swagger.tags = ['LTX']
    /* 	#swagger.description = 'Module: GetAll, getbyid, getbycheckinid'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetLtxStep1" } } */
    res.send(await ltxService.getStep1(req));
  }

  async updateStep1(req, res) {
    /* 	#swagger.tags = ['LTX']
    /* 	#swagger.description = 'Module: insert, update, delete, updatesticker'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostLtxStep1" } } */
    /*	#swagger.parameters['Sticker'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostLtxStep1UpdateSticker" } } */
    res.send(await ltxService.updateStep1(req));
  }

  async getStep1ConditionDetail(req, res) {
    /* 	#swagger.tags = ['LTX']
    /* 	#swagger.description = 'Module: GetAll, getbyid, getbyreqid'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetLtxStep1Condition" } } */
    res.send(await ltxService.getStep1ConditionDetail(req));
  }

  async updateStep1ConditionDetail(req, res) {
    /* 	#swagger.tags = ['LTX']
    /* 	#swagger.description = 'Module: insert, update, delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostLtxStep1Condition" } } */
    res.send(await ltxService.updateStep1ConditionDetail(req));
  }

  async getStep1RandomnessDetail(req, res) {
    /* 	#swagger.tags = ['LTX']
    /* 	#swagger.description = 'Module: GetAll, getbyid, getbyreqid'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostLtxStep1Randomness" } } */
    res.send(await ltxService.getStep1RandomnessDetail(req));
  }

  async updateStep1RandomnessDetail(req, res) {
    /* 	#swagger.tags = ['LTX']
    /* 	#swagger.description = 'Module: insert, update, delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostLtxStep1Randomness" } } */
    res.send(await ltxService.updateStep1RandomnessDetail(req));
  }

  async getStep2(req, res) {
    /* 	#swagger.tags = ['LTX']
    /* 	#swagger.description = 'Module: GetAll, getbyid, getbyreqid'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetLtxStep2" } } */
    res.send(await ltxService.getStep2(req));
  }

  async updateStep2(req, res) {
    /* 	#swagger.tags = ['LTX']
    /* 	#swagger.description = 'Module: insert, update, delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostLtxStep2" } } */
    res.send(await ltxService.updateStep2(req));
  }

  async getStep3(req, res) {
    /* 	#swagger.tags = ['LTX']
    /* 	#swagger.description = 'Module: GetAll, getbyid, getbyreqid'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetLtxStep3" } } */
    res.send(await ltxService.getStep3(req));
  }

  async updateStep3(req, res) {
    /* 	#swagger.tags = ['LTX']
    /* 	#swagger.description = 'Module: insert, update, delete, updatesticker'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostLtxStep3" } } */
    /*	#swagger.parameters['Sticker'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostLtxStep3UpdateSticker" } } */
    res.send(await ltxService.updateStep3(req));
  }

  async interface(req, res) {
    /* 	#swagger.tags = ['LTX']
    /* 	#swagger.description = 'Module: GetBatchNo, UpdateDRC'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostLtxInterface" } } */
    res.send(await ltxService.interface(req));
  }
}

module.exports = new ltxController();