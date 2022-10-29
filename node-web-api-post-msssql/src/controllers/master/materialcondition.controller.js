const matConService = require('../../services/master/materialcondition.service')

class materialConditionController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MaterialCondition']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetMaterialCondition" } } */
    res.send(await matConService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['MaterialCondition']
    /* 	#swagger.description = 'Module: Insert, Update, Delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostMaterialCondition" } } */
    res.send(await matConService.insertUpdate(req))
  }
}

module.exports = new materialConditionController();