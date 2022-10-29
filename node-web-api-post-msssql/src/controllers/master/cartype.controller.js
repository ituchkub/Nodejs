const carTypeService = require('../../services/master/cartype.service');

class carTypeController {
  async get(req, res) {
    /* 	#swagger.tags = ['CarType']
    /* 	#swagger.description = 'Module: GetAll, getbyid, getddl'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetCarType" } } */
    res.send(await carTypeService.get(req));
  }

  async post(req, res) {
    /* 	#swagger.tags = ['CarType']
    /* 	#swagger.description = 'Module: insert, update, delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostCarType" } } */
    res.send(await carTypeService.post(req));
  }
}

module.exports = new carTypeController();