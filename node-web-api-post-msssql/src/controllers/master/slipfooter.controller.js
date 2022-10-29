const slipService = require('../../services/master/slipfooter.service')

class slipController {
  async getList(req, res) {
    /* 	#swagger.tags = ['SlipFooter']
    /* 	#swagger.description = 'Module: GetAll, GetById'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetSlipFooter" } } */

    res.send(await slipService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['SlipFooter']
    /* 	#swagger.description = 'Module: Insert, Update'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostSlipFooter" } } */

    res.send(await slipService.insertUpdate(req))
  }
}

module.exports = new slipController();