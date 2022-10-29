const Service = require('../services/service');

class Controller {
  async get(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetAll, getbyid, getddl'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckin" } } */
    res.send(await Service.get(req));
  }

  async post(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostCheckin" } } */
    res.send(await Service.post(req));
  }

  async draining(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetDrainTime'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostCheckinDraining" } } */
    res.send(await Service.draining(req));
  }

  async dashboard(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetDashboard'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostCheckinDashboard" } } */
    res.send(await Service.dashboard(req));
  }

  async getMonitor(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetMonitor'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckinMonitor" } } */
    res.send(await Service.getMonitor(req));
  }
  async receiveQualityResult(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetMonitor'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckinMonitor" } } */
    res.send(await Service.qualityresult(req));
  }
  async authorization(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetMonitor'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckinMonitor" } } */
    res.send(await Service.authorization(req));
  }
  async checkedin(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetMonitor'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckinMonitor" } } */
    res.send(await Service.checkedin(req));
  }
  async receiveQualityResult(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetMonitor'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckinMonitor" } } */
    res.send(await checkinService.receiveQualityResult(req));
  }
}

module.exports = new Controller();