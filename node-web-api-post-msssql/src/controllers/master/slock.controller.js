const slockService = require('../../services/master/slock.service');

class slockController {
  async get(req, res) {
    /* 	#swagger.tags = ['Slock']
    /* 	#swagger.description = 'Module: GetAll, getbyid, getddl'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetSlock" } } */
    res.send(await slockService.get(req));
  }

  async post(req, res) {
    /* 	#swagger.tags = ['Slock']
    /* 	#swagger.description = 'Module: insert, update, delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostSlock" } } */
    res.send(await slockService.post(req));
  }
}

module.exports = new slockController();