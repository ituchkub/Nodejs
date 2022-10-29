const strContaminantFinesService = require('../../services/master/strcontaminantfines.service')

class strContaminantFinesController {
  async getList(req, res) {
    /* 	#swagger.tags = ['StrContaminantFines']
    /* 	#swagger.description = 'Module: GetAll, GetMenu, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrContaminantFines" } } */

    res.send(await strContaminantFinesService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['StrContaminantFines']
    /* 	#swagger.description = 'Module: Insert, Update'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrContaminantFines" } } */

    res.send(await strContaminantFinesService.insertUpdate(req))
  }
}

module.exports = new strContaminantFinesController();