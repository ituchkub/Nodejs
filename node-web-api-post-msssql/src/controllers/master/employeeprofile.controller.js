const employeeProfileService = require('../../services/master/employeeprofile.service');

class employeeProfileController {
  async get(req, res) {
    /*  #swagger.tags = ['Employee']
    /*  #swagger.description = 'Module: GetAll, getbyid, getddl'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetEmployeeProfile" } } */
    res.send(await employeeProfileService.get(req));
  }

  async post(req, res) {
    /*  #swagger.tags = ['Employee']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostEmployeeProfile" } } */
    res.send(await employeeProfileService.post(req));
  }
}

module.exports = new employeeProfileController();