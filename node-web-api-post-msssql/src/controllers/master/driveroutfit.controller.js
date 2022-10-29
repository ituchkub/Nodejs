const driverOutfitService = require('../../services/master/driveroutfit.service')

class driverOutfitController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MasterDDL']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetParam" } } */
    
    res.send(await driverOutfitService.getList(req))
  }

}

module.exports = new driverOutfitController();