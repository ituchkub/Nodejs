const readQrCodeService = require('../../services/master/readqrcode.service');

class readQrCodeController {
  async get(req, res) {
    /*  #swagger.tags = ['readQrCode']
    /*  #swagger.description = 'Module: GetData'
    /*  #swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetReadQrCode" } } */
    console.log('readQrCodeController: ', req.body);
    res.send(await readQrCodeService.get(req));
  }
}

module.exports = new readQrCodeController();