const worklistService = require('../../services/master/worklist.service')

class worklistController {
  async getList(req, res) {
    /* 	#swagger.tags = ['Dashboard']
    /* 	#swagger.description = 'Module: gettodolist, getworklist, getovertimelist, getrejectlist'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetWorklist" } } */
    
    res.send(await worklistService.getList(req))
  }

}

module.exports = new worklistController();