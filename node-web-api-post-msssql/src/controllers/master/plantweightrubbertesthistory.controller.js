const plantWeightRubberTestHistoryService = require('../../services/master/plantweightrubbertesthistory.service');

class plantWeightRubberTestHistoryController {
  async get(req, res) {
    /*  #swagger.tags = ['Plant']
    /*  #swagger.description = 'Module: GetAll, getbyid, getbyplantid'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetPlantWeightRubberTestHistory" } } */
    res.send(await plantWeightRubberTestHistoryService.get(req));
  }

  async post(req, res) {
    /*  #swagger.tags = ['Plant']
    /*  #swagger.description = 'Module: insert, update, delete'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostPlantWeightRubberTestHistory" } } */
    res.send(await plantWeightRubberTestHistoryService.post(req));
  }
}

module.exports = new plantWeightRubberTestHistoryController();