const senderService = require('../../services/master/sender.service');

class senderController {
  async get(req, res) {
    /* 	#swagger.tags = ['Sender']
    /* 	#swagger.description = 'Module: GetAll, getbyid, getddl'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetSender" } } */
    res.send(await senderService.get(req));
  }

  async post(req, res) {
    /* 	#swagger.tags = ['Sender']
    /* 	#swagger.description = 'Module: insert, update, delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostSender" } } */
    res.send(await senderService.post(req));
  }
}

module.exports = new senderController();