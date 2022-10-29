const drcService = require('../../services/request/drc.service')

class drcController {
  async getList(req, res) {
    /* 	#swagger.tags = ['StrDrcAfterWeight']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetWeightTest'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrDRC" } } */
    res.send(await drcService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['StrDrcAfterWeight']
    /* 	#swagger.description = 'Module: Insert, Update, Delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrDRC" } } */
    res.send(await drcService.insertUpdate(req))
  }

  async getApproval(req, res) {
    /*  #swagger.tags = ['StrDrcAfterWeight']
    /*  #swagger.description = 'Module: GetAll, getbyid, getbyplantid'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrDrcApproval" } } */
    res.send(await drcService.getApproval(req));
  }

  async postApproval(req, res) {
    /*  #swagger.tags = ['StrDrcAfterWeight']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrDrcApproval" } } */
    res.send(await drcService.postApproval(req));
  }

  async interface(req, res) {
    /* 	#swagger.tags = ['StrDrcAfterWeight']
    /* 	#swagger.description = 'Module: GetWeightBySampleNo, UpdateWeightAfter, getdeduct'
    /*	#swagger.parameters['deduct'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetDeductInterface" } } */
    res.send(await drcService.interface(req))
  }

}

module.exports = new drcController();