const weighingService = require('../../services/master/weighing.service');

class weighingController {
  async get(req, res) {
    /*  #swagger.tags = ['Weighing']
    /*  #swagger.description = 'Module: GetAll, getbyid, getslipinfo, getweightinfo, getddl'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetWeighing" } } */
    /*  #swagger.parameters['qrcode'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetWeighingInfo" } } */
    res.send(await weighingService.get(req));
  }

  async post(req, res) {
    /*  #swagger.tags = ['Weighing']
    /*  #swagger.description = 'Module: insert, update, weightin, weightout, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostWeighing" } } */
    /*  #swagger.parameters['weightin'] = { in: 'body', required: false, schema: { $ref: "#/definitions/PostWeightIn" } } */
    /*  #swagger.parameters['weightout'] = { in: 'body', required: false, schema: { $ref: "#/definitions/PostWeightOut" } } */
    res.send(await weighingService.post(req));
  }
}

module.exports = new weighingController();