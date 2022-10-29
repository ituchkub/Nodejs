const acceptanceRateService = require('../../services/master/acceptancerate.service')

class acceptanceRateController {
  async getList(req, res) {
    /* 	#swagger.tags = ['AcceptanceRate']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetAcceptanceRate" } } */
    res.send(await acceptanceRateService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['AcceptanceRate']
    /* 	#swagger.description = 'Module: Insert, Update, Delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostAcceptanceRate" } } */
    res.send(await acceptanceRateService.insertUpdate(req))
  }
}

module.exports = new acceptanceRateController();