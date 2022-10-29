const drainTimeService = require('../../services/master/draintime.service')

class drainTimeController {
  async getList(req, res) {
    /* 	#swagger.tags = ['DrainTime']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetDrainTime" } } */
    res.send(await drainTimeService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['DrainTime']
    /* 	#swagger.description = 'Module: Insert, Update, Delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostDrainTime" } } */
    res.send(await drainTimeService.insertUpdate(req))
  }
}

module.exports = new drainTimeController();