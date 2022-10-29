const checkinHistoryService = require('../../services/master/checkinhistory.service');

class checkinHistoryController {
  async get(req, res) {
    /*  #swagger.tags = ['CheckinHistory']
    /*  #swagger.description = 'Module: GetAll, getbyid, getbycheckinid'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckinHistory" } } */
    res.send(await checkinHistoryService.get(req));
  }

  async post(req, res) {
    /*  #swagger.tags = ['CheckinHistory']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostCheckinHistory" } } */
    res.send(await checkinHistoryService.post(req));
  }
}

module.exports = new checkinHistoryController();