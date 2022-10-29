const contaminantFoundService = require('../../services/master/contaminantfound.service')

class contaminantFoundController {
  async getList(req, res) {
    /* 	#swagger.tags = ['RssContaminantFound']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetContaminantFound" } } */

    res.send(await contaminantFoundService.getList(req))
  }

}

module.exports = new contaminantFoundController();