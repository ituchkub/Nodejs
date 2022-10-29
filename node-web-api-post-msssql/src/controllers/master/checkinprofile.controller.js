const checkinProfileService = require('../../services/master/checkinprofile.service');

class checkinProfileController {
  async get(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: GetAll, getbyid, getcheckinbyqr, getbyqr, getddl, getqrvpass'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCheckinProfile" } } */
    res.send(await checkinProfileService.get(req));
  }

  async post(req, res) {
    /*  #swagger.tags = ['Checkin']
    /*  #swagger.description = 'Module: insert, vpassinsert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostCheckinProfile" } } */
    /*  #swagger.parameters['vpassinsert'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostCheckinProfileVpassInsert" } } */
    console.log('checkinProfileController: ', req.body);
    res.send(await checkinProfileService.post(req));
  }
}

module.exports = new checkinProfileController();