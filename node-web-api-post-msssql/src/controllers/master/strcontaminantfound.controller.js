const strContaminantFoundService = require('../../services/master/strcontaminantfound.service');

class strContaminantFoundController {
  async get(req, res) {
    /*  #swagger.tags = ['StrContaminant']
    /*  #swagger.description = 'Module: GetAll, getbyid, getddl, getunit'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetStrContaminantFound" } } */
    res.send(await strContaminantFoundService.get(req));
  }

  async post(req, res) {
    /*  #swagger.tags = ['StrContaminant']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostStrContaminantFound" } } */
    res.send(await strContaminantFoundService.post(req));
  }
}

module.exports = new strContaminantFoundController();