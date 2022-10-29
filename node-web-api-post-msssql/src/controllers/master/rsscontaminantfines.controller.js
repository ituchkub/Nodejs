const rssContaminantFinesService = require('../../services/master/rsscontaminantfines.service')

class rssContaminantFinesController {
  async getList(req, res) {
    /* 	#swagger.tags = ['RssContaminantFines']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetRssContaminantFines" } } */

    res.send(await rssContaminantFinesService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['RssContaminantFines']
    /* 	#swagger.description = 'Module: Insert, Update'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostRssContaminantFines" } } */

    res.send(await rssContaminantFinesService.insertUpdate(req))
  }
}

module.exports = new rssContaminantFinesController();