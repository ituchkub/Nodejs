const provinceService = require('../../services/master/province.service')

class provinceController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MasterDDL']
    /* 	#swagger.description = 'Module: getall_province, getddl_province, getall_district, getddl_district, getddl_district_by_province, getall_subdistrict, getddl_subdistrict, getddl_subdistrict_by_district'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetProvince" } } */
    res.send(await provinceService.getList(req))
  }

}

module.exports = new provinceController();