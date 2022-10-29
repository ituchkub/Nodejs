const driverPunctualityService = require('../../services/master/driverpunctuality.service')

class driverPunctualityController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MasterDDL']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetParam" } } */
    
    res.send(await driverPunctualityService.getList(req))
  }

}

module.exports = new driverPunctualityController();