const checkinService = require('../services/master/checkin.service');

class checkinController {
  async get(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetAll, getbyid, getddl'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckin" } } */
    res.send(await checkinService.get(req));
  }

  async post(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostCheckin" } } */
    res.send(await checkinService.post(req));
  }

  async draining(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetDrainTime'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostCheckinDraining" } } */
    res.send(await checkinService.draining(req));
  }

  async dashboard(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetDashboard'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostCheckinDashboard" } } */
    res.send(await checkinService.dashboard(req));
  }

  async getMonitor(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetMonitor'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckinMonitor" } } */
    res.send(await checkinService.getMonitor(req));
  }
  async receiveQualityResult(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetMonitor'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckinMonitor" } } */
    res.send(await checkinService.qualityresult(req));
  }
  async authorization(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetMonitor'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckinMonitor" } } */
    res.send(await checkinService.authorization(req));
  }
  async checkedin(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetMonitor'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckinMonitor" } } */
    res.send(await checkinService.checkedin(req));
  }
  async receiveQualityResult(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetMonitor'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckinMonitor" } } */
    res.send(await checkinService.receiveQualityResult(req));
  }
}

module.exports = new checkinController();