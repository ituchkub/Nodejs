const satisfactionService = require('../../services/master/satisfaction.service')

class satisfactionController {
  async getList(req, res) {
    /* 	#swagger.tags = ['Satisfaction']
    /* 	#swagger.description = 'Module: GetSatisfaction, GetLogSatisfaction'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetSatisfaction" } } */
    res.send(await satisfactionService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['Satisfaction']
    /* 	#swagger.description = 'Module: Insert'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostSatisfaction" } } */
    res.send(await satisfactionService.insertUpdate(req))
  }
}

module.exports = new satisfactionController();