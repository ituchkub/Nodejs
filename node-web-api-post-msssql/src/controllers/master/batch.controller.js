const batchService = require('../../services/master/batch.service')

class batchController {
  async getList(req, res) {
    /* 	#swagger.tags = ['Batch']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetBatch" } } */
    res.send(await batchService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['Batch']
    /* 	#swagger.description = 'Module: Insert, Update, Delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostBatch" } } */
    res.send(await batchService.insertUpdate(req))
  }
}

module.exports = new batchController();