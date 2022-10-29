const plantService = require('../../services/master/plant.service');

class plantController {
  async get(req, res) {
    /* 	#swagger.tags = ['Plant']
    /* 	#swagger.description = 'Module: GetAll, getcontact, getbyid, getddl, GetAllWrt, getbyidwrt'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetPlant" } } */
    res.send(await plantService.get(req));
  }

  async post(req, res) {
    /* 	#swagger.tags = ['Plant']
    /* 	#swagger.description = 'Module: insert, update, delete, updatewrt'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostPlant" } } */
    res.send(await plantService.post(req));
  }

  // async postx(req, res) {
  //   /* 	#swagger.tags = ['Plant']
  //   /* 	#swagger.description = 'Module: updatewrt'
  //   /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostPlantWeightRubberTest" } } */
  //   res.send(await plantService.post(req));
  // }
}

module.exports = new plantController();