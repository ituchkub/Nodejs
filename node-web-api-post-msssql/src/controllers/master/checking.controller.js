const checkingService = require('../../services/master/checking.service')

class checkingController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MasterDDL']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetParam" } } */
    
    res.send(await checkingService.getList(req))
  }

}

module.exports = new checkingController();