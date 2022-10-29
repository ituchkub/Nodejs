const dashboardService = require('../../services/master/dashboard.service')

class dashboardController {
  async getList(req, res) {
    /* 	#swagger.tags = ['Dashboard']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetDashboard" } } */
    
    res.send(await dashboardService.getList(req))
  }

}

module.exports = new dashboardController();