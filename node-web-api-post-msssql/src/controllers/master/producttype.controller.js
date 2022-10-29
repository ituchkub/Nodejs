const productTypeService = require('../../services/master/producttype.service');

class productTypeController {
  async get(req, res) {
    /* 	#swagger.tags = ['ProductType']
    /* 	#swagger.description = 'Module: GetAll, getbyid, getddl'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetProductType" } } */
    res.send(await productTypeService.get(req));
  }

  async post(req, res) {
    /* 	#swagger.tags = ['ProductType']
    /* 	#swagger.description = 'Module: insert, update, delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostProductType" } } */
    res.send(await productTypeService.post(req));
  }
}

module.exports = new productTypeController();