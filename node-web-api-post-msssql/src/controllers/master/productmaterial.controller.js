const productMaterialService = require('../../services/master/productmaterial.service');

class productMaterialController {
  async get(req, res) {
    /* 	#swagger.tags = ['ProductMaterial']
    /* 	#swagger.description = 'Module: Getall, getbyid, getddl'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetProductMaterial" } } */
    res.send(await productMaterialService.get(req));
  }

  async post(req, res) {
    /* 	#swagger.tags = ['ProductMaterial']
    /* 	#swagger.description = 'Module: insert, update, delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostProductMaterial" } } */
    res.send(await productMaterialService.post(req));
  }
}

module.exports = new productMaterialController();