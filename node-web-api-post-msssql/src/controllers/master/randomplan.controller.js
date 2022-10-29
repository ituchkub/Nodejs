const randomPlanService = require('../../services/master/randomplan.service')

class randomPlanController {
  async getList(req, res) {
    /* 	#swagger.tags = ['RandomPlan']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetRandomPlan" } } */
    res.send(await randomPlanService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['RandomPlan']
    /* 	#swagger.description = 'Module: Insert, Update, Delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostRandomPlan" } } */
    res.send(await randomPlanService.insertUpdate(req))
  }
}

module.exports = new randomPlanController();