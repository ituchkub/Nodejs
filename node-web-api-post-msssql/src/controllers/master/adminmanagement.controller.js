const adminManagementService = require('../../services/master/adminmanagement.service')

class adminManagementController {
  async getList(req, res) {
    /* 	#swagger.tags = ['AdminManagement']
    /* 	#swagger.description = 'Module: GetAll'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetAdminManagement" } } */
    
    res.send(await adminManagementService.getList(req))
  }

}

module.exports = new adminManagementController();