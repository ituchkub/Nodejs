const strContaminantTypeService = require('../../services/master/strcontaminanttype.service');

class strContaminantTypeController {
  async get(req, res) {
    /*  #swagger.tags = ['StrContaminant']
    /*  #swagger.description = 'Module: GetAll, getbyid, getddl'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrContaminantType" } } */
    res.send(await strContaminantTypeService.get(req));
  }

  async post(req, res) {
    /*  #swagger.tags = ['StrContaminant']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrContaminantType" } } */
    res.send(await strContaminantTypeService.post(req));
  }
}

module.exports = new strContaminantTypeController();