const vendorService = require('../../services/master/vendor.service');

class vendorController {
  async get(req, res) {
    /* 	#swagger.tags = ['Vendor']
    /* 	#swagger.description = 'Module: GetAll, getbyid, getddl'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetVendor" } } */
    res.send(await vendorService.get(req));
  }

  async post(req, res) {
    /* 	#swagger.tags = ['Vendor']
    /* 	#swagger.description = 'Module: insert, update, delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostVendor" } } */
    res.send(await vendorService.post(req));
  }
}

module.exports = new vendorController();