const bannerService = require('../../services/master/banner.service')

class bannerController {
  async getList(req, res) {
    /* 	#swagger.tags = ['BannerKiosk']
    /* 	#swagger.description = 'Module: GetAll, GetById'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetBannerKiosk" } } */
    res.send(await bannerService.getList(req))
  }

  async insertUpdate(req, res) {
    /* 	#swagger.tags = ['BannerKiosk']
    /* 	#swagger.description = 'Module: insert, update, delete'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostBannerKiosk" } } */
    res.send(await bannerService.insertUpdate(req))
  }
}

module.exports = new bannerController();