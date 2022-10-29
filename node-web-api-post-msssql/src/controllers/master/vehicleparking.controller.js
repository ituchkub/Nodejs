const vehicleParkingService = require('../../services/master/vehicleparking.service')

class vehicleParkingController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MasterDDL']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetParam" } } */
    
    res.send(await vehicleParkingService.getList(req))
  }

}

module.exports = new vehicleParkingController();