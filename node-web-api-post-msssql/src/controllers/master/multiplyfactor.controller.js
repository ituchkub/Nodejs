const multiplyFactorService = require('../../services/master/multiplyfactor.service')

class multiplyFactorController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MultiplyFactor']
    /* 	#swagger.description = 'Module: GetAll, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetMultiplyFactor" } } */
    res.send(await multiplyFactorService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['MultiplyFactor']
    /* 	#swagger.description = 'Module: Insert, Update, Delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostMultiplyFactor" } } */
    res.send(await multiplyFactorService.insertUpdate(req))
  }
}

module.exports = new multiplyFactorController();