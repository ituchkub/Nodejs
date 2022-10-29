const vehicleConditionService = require('../../services/master/vehiclecondition.service')

class vehicleConditionController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MasterDDL']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetParam" } } */
    
    res.send(await vehicleConditionService.getList(req))
  }

}

module.exports = new vehicleConditionController();