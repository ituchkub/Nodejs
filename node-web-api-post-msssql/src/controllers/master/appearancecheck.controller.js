const appearanceCheckService = require('../../services/master/appearancecheck.service')

class appearanceCheckController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MasterDDL']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetParam" } } */
    
    res.send(await appearanceCheckService.getList(req))
  }

}

module.exports = new appearanceCheckController();