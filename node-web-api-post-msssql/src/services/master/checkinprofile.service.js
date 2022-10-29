const attachMssql = require('../../utils/mssql/attach.mssql');
const helper = require('../../utils/helper.service');
const checkinProfileMssql = require('../../utils/mssql/checkinprofile.mssql');

class checkinProfileService {
  async get(req) {
    try {
      const output = await checkinProfileMssql.get(req.body);
      let data = {}
      let res = {
        status: true,
        data: data,
        message: 'Success.'
      }

      data = output.recordset;
      var isGetImage = req?.body?.body?.isGetImage;
      if (isGetImage == 1) {
        var s3req = req;
        var datatores = [];
        // var resData = [];
        s3req.body.Module = 'GetFileByAttID';
        s3req.body.body = {};
        for (let [i, fileAtt] of data.entries()) {
          s3req.body.body.AttachID = fileAtt.AttachId;
          const outputFile = await attachMssql.getAttachPath(req.body);
          if (outputFile.output.pStatus != 1) throw output.output.pMessage;
          var fileArr = outputFile.recordset;
          console.log(fileArr);
          ////////////////////
          fileArr.forEach(queryData => {
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
                // queryData.filedata = filebody;
                // resData.push(queryData);

                data[i].filedata = filebody;
                datatores.push(data[i]);

              }).catch((e) => {
                console.log(e);

                return {
                  status: false,
                  data: [],
                  message: e.toString()
                }
                // res.send(e)
              })
          });
          const sleep = ms => new Promise(r => setTimeout(r, ms));
          await sleep(1000 + (i * 50));
          // data[i].File = resData;
        }
        ////////////////////
        res.data = datatores;
        res.message = output.pMessage;
      } else {
        res.data = data;
        res.message = output.pMessage;
      }

      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message ? error.message : error
      }
    }
  }

  async post(req) {
    try {
      const output = await checkinProfileMssql.post(req.body);

      if (output.output.pStatus != 1) {
        throw output.output.pMessage;
      }

      let res = {
        status: true,
        pid: output.output.pId,
        message: output.output.pMessage
      }
      console.log('checkinProfileService: ', res);

      return res;
    } catch (error) {
      return {
        status: false,
        message: error.message ? error.message : error
      }
    }
  }
}

module.exports = new checkinProfileService();