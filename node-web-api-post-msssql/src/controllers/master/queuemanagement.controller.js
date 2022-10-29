const queueManagementService = require('../../services/master/queuemanagement.service');

class queueManagementController {
  async get(req, res) {
    /*  #swagger.tags = ['QueueManagement']
    /*  #swagger.description = 'Module: GetAll, getbyid, getqueuestation1, getqueuestation2, getddl'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetQueueManagement" } } */
    res.send(await queueManagementService.get(req));
  }

  async post(req, res) {
    /*  #swagger.tags = ['QueueManagement']
    /*  #swagger.description = 'Module: insert, update, processqueue, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostQueueManagement" } } */
    res.send(await queueManagementService.post(req));
  }
}

module.exports = new queueManagementController();