const truckConService = require('../../services/master/truckcondition.service')

class truckConditionController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MasterDDL']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetParam" } } */
    
    res.send(await truckConService.getList(req))
  }

}

module.exports = new truckConditionController();