const mainMenu = require('../../utils/mssql/mainmenu.mssql')

class mainMenuService {
  async getList(req) {
    try {
      const output = await mainMenu.getList(req.body);
      if(output.output.pStatus != 1) throw output.output.pMessage;

      let _data = output.recordset;
      if(req.body.Module.toLocaleLowerCase() == 'getmenu') {
        _data.forEach(item => {
          let child = _data.filter(x => x.ParentId == item.Id);
          item.Child = child
        });

        _data = _data.filter(x => x.ParentId == 0)
      }

      let res = {
        status: true,
        data: _data,
        message: output.output.pMessage
      };

      return res;
    }
    catch(error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }

  async insertUpdate(req) {
    try {
      const output = await mainMenu.insertUpdate(req.body);
      if(output.output.pStatus == 0) throw output.output.pMessage;

      let res = {
        status: true,
        data: output.recordset,
        message: output.output.pMessage
      };

      return res;
    }
    catch(error) {
      return {status: false, message: error.message ? error.message : error};
    }
  }
}

module.exports = new mainMenuService();