const permissionService = require('../../services/master/permission.service')

class permissionController {
  async getList(req, res) {
    /* 	#swagger.tags = ['Permission']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetPermission" } } */
    res.send(await permissionService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['Permission']
    /* 	#swagger.description = 'Module: Insert, Update, Delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostPermission" } } */
    res.send(await permissionService.insertUpdate(req))
  }
}

module.exports = new permissionController();