const packingService = require('../../services/master/rubberpacking.service')

class rubberPackingController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MasterDDL']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetParam" } } */
    
    res.send(await packingService.getList(req))
  }

}

module.exports = new rubberPackingController();