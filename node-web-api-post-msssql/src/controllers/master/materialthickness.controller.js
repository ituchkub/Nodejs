const materialThicknessService = require('../../services/master/materialthickness.service')

class materialThicknessController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MasterDDL']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetParam" } } */
    
    res.send(await materialThicknessService.getList(req))
  }

}

module.exports = new materialThicknessController();