const strContaminantService = require('../../services/master/strcontaminant.service');

class strContaminantController {
  async get(req, res) {
    /*  #swagger.tags = ['StrContaminant']
    /*  #swagger.description = 'Module: GetAll, getbyid, getddl'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrContaminant" } } */
    res.send(await strContaminantService.get(req));
  }

  async post(req, res) {
    /*  #swagger.tags = ['StrContaminant']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrContaminant" } } */
    res.send(await strContaminantService.post(req));
  }
}

module.exports = new strContaminantController();