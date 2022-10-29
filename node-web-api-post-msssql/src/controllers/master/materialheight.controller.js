const materialHeightService = require('../../services/master/materialheight.service')

class materialHeightController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MasterDDL']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetParam" } } */
    
    res.send(await materialHeightService.getList(req))
  }

}

module.exports = new materialHeightController();