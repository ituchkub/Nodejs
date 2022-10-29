const dropdownService = require('../../services/master/dropdown.service')

class dropdownController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MasterDDL']
    /* 	#swagger.description = 'Module: GetAll, GetByType, DDL_Status, DDL_RandomPlan, getpriorityddl, getcontaminanttypeddl, getcolorddl, getrubbershapeddl, gettoluenetestddl, getsulphatetestddl, DDL_GetActiveForStrDrc, getnh3ddl, getvfaddl'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetDropdown" } } */
    res.send(await dropdownService.getList(req))
  }

}

module.exports = new dropdownController();