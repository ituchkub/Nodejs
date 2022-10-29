/* eslint-disable no-inner-declarations */
const attachMssql = require('../../utils/mssql/attach.mssql');
const emailService = require('../../utils/email.service');
const  multer = require ('multer');
const fs = require ('fs');
const jpath = require ('path');

class attachController {
  async getAttachFile(req, res) {
    /* 	#swagger.tags = ['Attach']
    /* 	#swagger.description = 'Module: GetFile, GetFileByAttID'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/GetAttach" } } */

    try {
      const output = await attachMssql.getAttachPath(req.body);
      if(output.output.pStatus == 0) throw output.output.pMessage;

      let _res = {
        status: true,
        data: output.recordset,
        message: output.output.pMessage
      };

      res.send(_res);
    }
    catch(error) {
      res.send({status: false, message: error.message ? error.message : error});
    }
  }

  async insertAttachFile(req, res) {
    /* 	#swagger.tags = ['Attach']
    /* 	#swagger.description = 'Module: Insert, Delete <br>
          Form: 1 = Master Banner Kiosk, 2 = Master Plant, 3 = CheckinProfile, 10 = SRT Form, 20 = LTX, 30 = RSS'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostAttach" } } */
    /*	#swagger.parameters['files'] = { in: 'formData', type: 'file', required: 'true', } */
    try {
      let option = {
        path: process.env.UPLOAD_DIR
      }

      let _paramString = ''
      let _list = []

      let storage = multer.diskStorage({
        destination: function (req, file, callback) {
          _paramString = req.body['param'];
          const path = option.path;
          fs.mkdirSync(path, { recursive: true });
          callback(null, path);
        },
        filename: function (req, file, callback) {
          const spliter = file.mimetype.split('/');
          const fileType = option.type ? option.type : spliter[spliter.length - 1];

          const makeid = (length) => {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
          }
          
          const uuid = () => {
            var firstPart = (Math.random() * 46656) | 0;
            var secondPart = (Math.random() * 46656) | 0;
            firstPart = ("000" + firstPart.toString(36)).slice(-3);
            secondPart = ("000" + secondPart.toString(36)).slice(-3);
            return makeid(5) + firstPart + secondPart;
          }

          // const fileName = option.name ? `${option.name}.${fileType}` : file.originalname;
          const fileName = ['jpg', 'jpeg', 'png'].includes(fileType) ? `${uuid()}.${fileType}` : file.originalname;
          _list.push(fileName)
          callback(null, fileName);
        }
      });

      let upload = multer({ storage : storage}).array('files');

      upload(req, res, function(error) {
        if(error) {
          res.send({status: false, message: error});
        }

        upload2DB(_paramString, _list, output => {
          res.send(output)
        });
      });

      async function upload2DB(_paramString, _list, cb) {
        let isSuccess = true;
        let msgError = ''
        let _data = {}
        let _param = JSON.parse(_paramString);
        await Promise.all(
          _list.map(async (name) => {
            let objReq = {
              Module: _param.Module,
              SessionEmpID: _param.SessionEmpID,
              body: {
                ReqID: _param.body.ReqID,
                CusID: _param.body.CusID,
                SeqID: _param.body.SeqID,
                Form: _param.body.Form,
                PathFull: jpath.join(option.path, name),
                RootPath: jpath.join(option.path),
                FileName: name,
                Extention: _param.body.Extention,
                SELLER_TAX_ID: _param.body.SELLER_TAX_ID,
                DOCUMENT_ID: _param.body.DOCUMENT_ID,
                DOCUMENT_TYPE_CODE: _param.body.DOCUMENT_TYPE_CODE
              }
            }
      
            const output = await attachMssql.insertAttachPath(objReq)
            if(output.output.pStatus == 0) {
              isSuccess = false;
              msgError = output.output.pMessage;
            }
            _data = {
              AttachId: output.output.pReturnId,
              ReqID: _param.body.ReqID,
              CusID: _param.body.CusID,
              SeqID: _param.body.SeqID,
              Form: _param.body.Form,
              FileName: name
            }
          })
        );
        
        if(!isSuccess) {
          cb({status: false, message: msgError});
        } else {
          cb({status: true, data: _data, message: 'Upload Success.'});
        }
      }
    }
    catch (error) {
      res.send({status: false, message: error});
    }
  }

  async deleteAttachFile(req, res) {
    /* 	#swagger.tags = ['Attach']
    /* 	#swagger.description = 'Delete, DeleteMulti'
    /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostAttach" } } */
    try {
      const output = await attachMssql.deleteAttachPath(req.body);
      if(output.output.pStatus != 1) throw output.output.pMessage;

      let _res = {
        status: true,
        data: output.recordset,
        message: output.output.pMessage
      };

      res.send(_res);
    }
    catch(error) {
      res.send({status: false, message: error.message ? error.message : error});
    }

  }

  async sendEmail(req, res) {
    let output = await emailService.ltxSendMail(req.body.body);
    return res.send(output)
  }
}

module.exports = new attachController();