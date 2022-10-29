const attachMssql = require('./mssql/attach.mssql');
const  multer = require ('multer');
const fs = require ('fs');
const jpath = require ('path');

class attachservice {
  async getAttachPath(req) {
    try {
      const output = await attachMssql.getAttachPath(req.body);

      let res = {}
      if(output.output.pStatus == 1) {
        res.status = true
        res.data = output.recordset
        res.message = output.output.pMessage
      } else {
        res.status = false
        res.data = null
        res.message = output.output.pMessage
      }

      return res;
    }
    catch (error) {
      return {status: false, message: error.message};
    }
  }

  uploadSingle(option, req, res) {
    return new Promise((resolve, reject) => {
      try {
        let storage = multer.diskStorage({
          destination: function (req, file, callback) {
            const path = option.path;
            fs.mkdirSync(path, { recursive: true });
            callback(null, path);
          },
          filename: function (req, file, callback) {
            const spliter = file.mimetype.split('/');
            const fileType = option.type ? option.type : spliter[spliter.length - 1];
            const fileName = option.name ? `${option.name}.${fileType}` : file.originalname;
            callback(null, fileName);
          }
        });

        let upload = multer({ storage : storage}).single('file');

        upload(req, res, function(error) {
          if(error) {
            reject({status: false, message: error});
          }
          resolve({status: true, message: 'Upload Success.'});
        });
      }
      catch (error) {
        reject({status: false, message: error});
      }
    });
  }

  uploadMulti(option, req, res) {
    let _s = this;
    return new Promise((resolve, reject) => {
      try {
        let _param = ''
        let _list = []
        let storage = multer.diskStorage({
          destination: function (req, file, callback) {
            _param = req.body['param'];
            const path = option.path;
            fs.mkdirSync(path, { recursive: true });
            callback(null, path);
          },
          filename: function (req, file, callback) {
            const spliter = file.mimetype.split('/');
            const fileType = option.type ? option.type : spliter[spliter.length - 1];
            const fileName = option.name ? `${option.name}.${fileType}` : file.originalname;
            _list.push(fileName)
            callback(null, fileName);
          }
        });

        let upload = multer({ storage : storage}).array('files');

        upload(req, res, function(error) {
          if(error) {
            reject({status: false, message: error});
          }
          _s.insertToDB(option, _param, _list);
          resolve({status: true, message: 'Upload Success.'});
        });
      }
      catch (error) {
        reject({status: false, message: error});
      }
    });
  }

  insertToDB(option, param, list) {
    let _param = JSON.parse(param);
    list.forEach(name => {
      let objReq = {
        Module: _param.Module,
        SessionEmpID: _param.SessionEmpID,
        body: {
          ReqID: _param.body.ReqID,
          CusID: _param.body.CusID,
          SeqID: option.seqId,
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

      const output = attachMssql.insertAttachPath(objReq)
    });
  }
  
}

module.exports = new attachservice();