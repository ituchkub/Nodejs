const mainMenuService = require('../../services/master/mainmenu.service')

class mainMenuController {
  async getList(req, res) {
    /* 	#swagger.tags = ['MainMenu']
    /* 	#swagger.description = 'Module: GetAll, GetMenu, GetById, GetDDL'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetMainMenu" } } */

    res.send(await mainMenuService.getList(req))
  }
  
  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['MainMenu']
    /* 	#swagger.description = 'Module: Insert, Update'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostMainMenu" } } */

    res.send(await mainMenuService.insertUpdate(req))
  }

}

module.exports = new mainMenuController();