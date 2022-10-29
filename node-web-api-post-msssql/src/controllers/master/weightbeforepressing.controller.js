const weightBeforePressingService = require('../../services/master/weightbeforepressing.service')

class weightBeforePressingController {
  async getList(req, res) {
    /* 	#swagger.tags = ['WeightBeforePressing']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetWeightBeforePressing" } } */
    res.send(await weightBeforePressingService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['WeightBeforePressing']
    /* 	#swagger.description = 'Module: Insert, Update, Delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostWeightBeforePressing" } } */
    res.send(await weightBeforePressingService.insertUpdate(req))
  }
}

module.exports = new weightBeforePressingController();