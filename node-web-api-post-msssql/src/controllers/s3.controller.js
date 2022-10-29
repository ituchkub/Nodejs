const crypto = require('crypto');
const path = require('path');
const s3 = require('../config/s3.config');
const attachMssql = require('../utils/mssql/attach.mssql');
const helper = require('../utils/helper.service');

// uploading file to s3
exports.upload = (req, res) => {
  try {
    /* 	#swagger.tags = ['Attach']
        /* 	#swagger.description = 'Module: Insert, Delete <br>
              Form: 1 = Master Banner Kiosk, 2 = Master Plant, 3 = CheckinProfile, 10 = SRT Form, 20 = LTX, 30 = RSS'
        /*	#swagger.parameters['obj'] = { in: 'body', required: true, schema: { $ref: "#/definitions/PostAttach" } } */
    /*	#swagger.parameters['files'] = { in: 'formData', type: 'file', required: 'true', } */

    // req.file contains information of the uploaded file
    if (!req.files) {
      res.status(400).json({
        status: false,
        message: 'Please select a file to upload'
      });
    }

    let _paramString = req.body['param'];
    var _paramJson = JSON.parse(_paramString);
    // var _list = [];
    var _keylist = [];
    // var _namelist = [];
    // var _respathlist = [];
    // var item = {};

    var rootDir = '';
    var formval = _paramJson?.body?.Form;
    if (formval == 1) {
      rootDir = 'banner';
    } else if (formval == 2) {
      rootDir = 'plant';
    } else if (formval == 3) {
      rootDir = 'checkin';
    } else if (formval == 10) {
      rootDir = 'str';
    } else if (formval == 20) {
      rootDir = 'ltx';
    } else if (formval == 30) {
      rootDir = 'rss';
    } else {
      rootDir = 'others';
    }

    // setting up s3 upload parameters
    req.files.forEach((file) => {
      // var fileObj = {};

      let fileOgName = file.originalname;
      let fileOgExt = path.extname(fileOgName);
      let fileKeyName = crypto.randomUUID() + fileOgExt;
      let fileKeyPath = path.join(rootDir, fileKeyName);
      // _namelist.push(fileOgName);
      _keylist.push(fileKeyName);

      // Key: file.originalname.replace(/\s+/g, "-"), // replace space in a filename with hyphen
      const params = {
        Bucket: s3.bucket_name,
        Key: fileKeyPath,
        Body: file.buffer,
      };
      const s3run = async () => {
        try {
          const data = await s3.client.upload(params).promise()
          var resFilePath = data?.Location;
          console.log(data);
          return resFilePath;
        } catch (err) {
          console.log(err);
          
          res.send({
            status: false,
            message: err.toString()
          });
        }
      };
      // s3run();

      var resItem = s3run();
      console.log(resItem.length);
      // var item = {
      //   'filename': fileOgName,
      //   'extension': fileOgExt,
      //   'key': fileKeyName,
      //   'dir': rootDir,
      //   'fullpath': resItem,
      // }
      // var itemkey = fileKeyName;
      // var items = {};
      // items[itemkey] = item;
      // _list.push(item);
      // _respathlist.push(resItem);

    });
    // upload2DB(_paramString, _list, _keylist, _namelist, rootDir, output => {
      upload2DB(_paramString, _keylist, rootDir, output => {
      res.send(output);
    });
  } catch (error) {
      console.log(error);
      res.send({
      status: false,
      message: error
    });
  }
};

// async function upload2DB(_paramString, _list, _keylist, _namelist, rootDir, output) {
  async function upload2DB(_paramString, _keylist, rootDir, output) {
  let isSuccess = true;
  let msgError = ''
  let _data = {}
  let _param = JSON.parse(_paramString);
  var regex = /(?:\.([^.]+))?$/;

  await Promise.all(
    // _list.map(async (itemkey) => {
    _keylist.map(async (fileKeyName) => {

      let objReq = {
        Module: _param.Module,
        SessionEmpID: _param.SessionEmpID,
        body: {
          ReqID: _param.body.ReqID,
          CusID: _param.body.CusID,
          SeqID: _param.body.SeqID,
          Form: _param.body.Form,
          // PathFull: _list.fullpath,
          PathFull: 'https://' + path.join(process.env.AWS_BUCKET + '.' + process.env.AWS_ENDPOINT, rootDir, fileKeyName),
          RootPath: rootDir,
          PathName: path.join(rootDir, fileKeyName),
          FileName: fileKeyName,
          Extention: regex.exec(fileKeyName)[1],
          SELLER_TAX_ID: _param.body.SELLER_TAX_ID,
          DOCUMENT_ID: _param.body.DOCUMENT_ID,
          DOCUMENT_TYPE_CODE: _param.body.DOCUMENT_TYPE_CODE
        }
      }

      const output = await attachMssql.insertAttachPath(objReq)
      if (output.output.pStatus == 0) {
        isSuccess = false;
        msgError = output.output.pMessage;
      }
      _data = {
        AttachId: output.output.pReturnId,
        ReqID: _param.body.ReqID,
        CusID: _param.body.CusID,
        SeqID: _param.body.SeqID,
        Form: _param.body.Form,
        // FileName: _namelist,
        FileKey: _keylist,
        // FilePath: _list,
      }
    })
  );

  if (!isSuccess) {
    output({
      status: false,
      message: msgError
    });
  } else {
    output({
      status: true,
      data: _data,
      message: 'Upload Success.'
    });
  }
}

exports.download = (req, res) => {
  async function getData(req, res) {
    try {
      // console.log(req.body);
      var i = 0;
      const output = await attachMssql.getAttachPath(req.body);
      // console.log(output);
      if (output.output.pStatus == 0) throw output.output.pMessage;
      var queryArr = output.recordset;
      var resData = [];
      queryArr.forEach(queryData => {
        var dataType = null;
        var subDataType = null;
        switch (queryData?.Extention) {
          case 'png':
          case 'jpg':
          case 'jpeg':
            dataType = 'image';
            subDataType = queryData?.Extention;
            break;
          case 'txt':
          case 'csv':
            dataType = 'text';
            subDataType = 'plain';
            break;
            case 'pdf':
            case 'xls':
            case 'xlsm':
            case 'xlsx':
            case 'doc':
            case 'docm':
            case 'docs':
            case 'docx':
            case 'ppt':
            case 'pptm':
            case 'pptx':
            case 'eps':
            case 'otf':
            case 'msg':
            case 'rar':
            case 'zip':
            case '7z':
            case 'psd':
            case 'ai':
            dataType = 'application';
            subDataType = queryData?.Extention;
            break;
          default:
            dataType = 'image';
            subDataType = queryData?.Extention;
            break;
        }
        helper.getImage(queryData)
          .then((file) => {
            let filebody = "data:" + dataType + "/" + subDataType + ";base64," + helper.encode(file.Body);
            queryData.filedata = filebody;
            // queryData.filedata = 'testdata';
            resData.push(queryData);

            // res.send(_res);
            return resData;

            //Preview file
            // let filebody = "<img src='data:image/jpeg;base64," + encode(file.Body) + "'" + "/>";
            // let startHTML = "<html><body></body>";
            // let endHTML = "</body></html>";
            // let html = startHTML + filebody + endHTML;
            // res.send(html)
          }).catch((e) => {
            console.log(e);

            return {
              status: false,
              data: [],
              message: e.toString()
            }
            // res.send(e)
          })
          i++;
      });

      const sleep = ms => new Promise(r => setTimeout(r, ms));
      await sleep(1000 + (i * 50));
      await Promise.all(queryArr.map(helper.getImage)).then(() => {
      if (resData?.status == false) {
        console.log(resData);
        res.send(resData);
        // return resData;
      } else {
        let _res = {
          status: true,
          data: resData,
          message: output.output.pMessage
        };
        res.send(_res);
        // return _res;
      }
    });
    } catch (error) {
      res.send({
        status: false,
        message: error.message ? error.message : error
      });
    }
  }

  // async function getImage(fileData) {
  //   try {
  //     const data = s3.client.getObject({
  //       Bucket: s3.bucket_name,
  //       Key: fileData?.PathName,
  //     }).promise();

  //     return data;
  //   } catch {
  //     return false;
  //   }
  // }

  // function encode(data) {
  //   let buf = Buffer.from(data);
  //   let base64 = buf.toString('base64');

  //   return base64
  // }

  // var resImage = getImage();
  getData(req, res);
}