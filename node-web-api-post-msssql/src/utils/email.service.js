const fs = require('fs');
const nodemailer = require('nodemailer');
const { terminalWidth } = require('yargs');
const mssqlcon = require('./mssql/connection');
// const path = require('path');
// const a = require('./tmpmail/LTX001.html');

const transporter = nodemailer.createTransport({
  // port: 587,
  // host: "smtp.office365.com",
  // auth: {
  //     user: 'test01@fusionsoft.co.th',
  //     pass: 'Aa12345!@#$%',
  // },
  port: process.env.MAIL_PORT,
  host: process.env.MAIL_HOST,
  auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
  },
});

let pathMail = 'src/utils/tmpmail'
let appLink = process.env.WEB_URL;
class emailService {
  async ltxSendMail(param) {
    try {
      // param = {
      //   pId: 0,
      //   pStatus: 1,
      //   pMessage: '',
      //   pMailTemplate: '',
      //   pMailFrom: '',
      //   pMailTo: '',
      //   pMailCc: '',
      // }
      console.log(param);
      console.log(param?.pMailTemplate);
      if(!param?.pMailTemplate || param?.pMailTemplate == '') return {status: true}
      
      let mail = {
        from: '',
        to: [],
        cc: [],
        subject: '',
        html: ''
      }

      const objPost = {
        Module: 'GetMailInfo_LTX',
        Id: param.pId
      }
      if(['LTX001', 'LTX004'].includes(param.pMailTemplate)) {

        const info = await this.post(objPost);
        if(info.output.pStatus != 1) throw info.output.pMessage;

        let mailInfo = info.recordset[0] || {};
        mail.id = param.pId
        mail.from = param.pMailFrom
        mail.user = mailInfo.UserCreate
        mail.to = param.pMailTo
        mail.cc = param.pMailCc
        mail.subject = this.getSubjectMail(param.pMailTemplate, mailInfo.Code)

        let _html = await fs.readFileSync(`${pathMail}/${param.pMailTemplate}.html`, 'utf8');
        let _footer = await fs.readFileSync(`${pathMail}/MailFooter.html`, 'utf8');

        _html = _html.replace('_docNumber_', mailInfo.Code)
        _html = _html.replace('_docNumber_', mailInfo.Code)
        _html = _html.replace('_status_', `"${mailInfo.SummaryTestResultTxt || mailInfo.SummaryTestResult == 1 ? 'ผ่าน' : 'ไม่ผ่าน'}"`)
        _html = _html.replace('_statusRubber_', `"${mailInfo.isLatexPhysicalPassed == 1 ? '/ (ผ่าน)' : 'X (ไม่ผ่าน)'}"`)
        _html = _html.replace('_statusPacking_', `"${mailInfo.isLatexPackingPassed == 1 ? '/ (ผ่าน)' : 'X (ไม่ผ่าน)'}"`)

        let _linkParam = Buffer.from(`{"ReqId":${mailInfo.ReqId}, "CheckinId": ${mailInfo.CheckinId}}`).toString('base64')
        _html = _html.replace('_linkDocNumber_', `${appLink}/Weight/After/LTX/Step${mailInfo.Step == 4 ? 3 : mailInfo.Step}?parm=${_linkParam}`)

        _html = _html.replace('_userName_', mailInfo.UserCreate)
        _html = _html.replace('_imgFooter_', _footer)

        mail.html = _html
        
        return await this.sendMail(param.pMailTemplate, mail);
      }
      else if(['LTX002', 'LTX005', 'LTX006', 'LTX008', 'LTX011', 'LTX012'].includes(param.pMailTemplate)) {

        const info = await this.post(objPost);
        if(info.output.pStatus != 1) throw info.output.pMessage;

        let mailInfo = info.recordset[0] || {};
        mail.id = param.pId
        mail.from = param.pMailFrom
        mail.user = mailInfo.UserCreate
        mail.to = param.pMailTo
        mail.cc = param.pMailCc
        mail.subject = this.getSubjectMail(param.pMailTemplate, mailInfo.Code)

        let _html = await fs.readFileSync(`${pathMail}/${param.pMailTemplate}.html`, 'utf8');
        let _footer = await fs.readFileSync(`${pathMail}/MailFooter.html`, 'utf8');

        _html = _html.replace('_docNumber_', mailInfo.Code)
        _html = _html.replace('_docNumber_', mailInfo.Code)

        let _linkParam = Buffer.from(`{"ReqId":${mailInfo.ReqId}, "CheckinId": ${mailInfo.CheckinId}}`).toString('base64')
        _html = _html.replace('_linkDocNumber_', `${appLink}/Weight/After/LTX/Step${mailInfo.Step == 4 ? 3 : mailInfo.Step}?parm=${_linkParam}`)

        _html = _html.replace('_userName_', mailInfo.UserCreate)
        _html = _html.replace('_imgFooter_', _footer)

        mail.html = _html
        
        return await this.sendMail(param.pMailTemplate, mail);
      }
      else if(['LTX007', 'LTX009'].includes(param.pMailTemplate)) {

        const info = await this.post(objPost);
        if(info.output.pStatus != 1) throw info.output.pMessage;

        let mailInfo = info.recordset[0] || {};
        mail.id = param.pId
        mail.from = param.pMailFrom
        mail.user = mailInfo.UserCreate
        mail.to = param.pMailTo
        mail.cc = param.pMailCc
        mail.subject = this.getSubjectMail(param.pMailTemplate, mailInfo.Code)

        let _html = await fs.readFileSync(`${pathMail}/${param.pMailTemplate}.html`, 'utf8');
        let _footer = await fs.readFileSync(`${pathMail}/MailFooter.html`, 'utf8');

        _html = _html.replace('_docNumber_', mailInfo.Code)
        _html = _html.replace('_docNumber_', mailInfo.Code)
        _html = _html.replace('_status_', `"${mailInfo.SummaryTestResultTxt || mailInfo.SummaryTestResult == 1 ? 'ผ่าน' : 'ไม่ผ่าน'}"`)
        _html = _html.replace('_statusNH3_', `"${mailInfo.isNh3ValuePassed == 1 ? '/ (ผ่าน)' : 'X (ไม่ผ่าน)'}"`)
        _html = _html.replace('_statusVFA_', `"${mailInfo.isVfaValuePassed == 1 ? '/ (ผ่าน)' : 'X (ไม่ผ่าน)'}"`)

        let _linkParam = Buffer.from(`{"ReqId":${mailInfo.ReqId}, "CheckinId": ${mailInfo.CheckinId}}`).toString('base64')
        _html = _html.replace('_linkDocNumber_', `${appLink}/Weight/After/LTX/Step${mailInfo.Step == 4 ? 3 : mailInfo.Step}?parm=${_linkParam}`)

        _html = _html.replace('_userName_', mailInfo.UserCreate)
        _html = _html.replace('_imgFooter_', _footer)

        mail.html = _html

        // console.log('_html: ', _html)

        return await this.sendMail(param.pMailTemplate, mail);
      } 
      
      else {
        return {status: true, message: ''}
      }
    }
    catch(error) {
      return {status: false, message: error.message ? error.message : error};
    } 
  }

  async sendMail(temp, mail) {
    try {
      mail.html = mail.html.replace('_dumTo_', mail.to)
      mail.html = mail.html.replace('_dumCC_', mail.cc)

      const mailData = {
        from: 'test01@fusionsoft.co.th',
        to: 'test02@fusionsoft.co.th',
        cc: [],
        subject: mail.subject,
        text: '',
        html: mail.html,
      };
      // const mailData = {
      //   from: mail.from,
      //   to: mail.to,
      //   cc: mail.cc,
      //   subject: mail.subject,
      //   text: '',
      //   html: mail.html,
      // };
      
      const resMail = await transporter.sendMail(mailData);
      this.saveLogMail(temp, mail)

      let res = {
        status: true, 
        data: resMail,
        message: 'Success'
      }

      return res;
    }
    catch(error) {
      const msg = error.message ? error.message : error
      this.saveLogMail(temp, mail, msg)
      
      return {status: false, message: msg};
    }
  }

  async sendAttachMail(mailData) {
  }

  async saveLogMail(temp, mail, error) {
    const conn = await mssqlcon.getConnection();
    conn.request()
      .input("Module", 'Insert')
      // .input("SessionEmpId", param.SessionEmpId)

      .input("Type", temp)
      .input("ReqID", mail.id)
      .input("Subject", mail.subject)
      .input("MailTo", mail.to)
      .input("MailCC", mail.cc)
      .input("Body", mail.html)
      .input("Status", error ? 2 : 1)
      .input("ErrMessage", error)
      .input("CreateBy", -2)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_LogMail_InsertUpdate");

    // return res;
  }

  getSubjectMail(temp, data) {
    let subject = ''
    switch (temp) {
      case 'LTX001':
        subject = `{ STA-Test } รบกวนพิจารณาปรับเกณฑ์การสุ่มน้ำยางสดรับเข้า Slip No. ${data}`;
        break;
      case 'LTX002':
        subject = `{ STA-Test } รบกวน ทบทวน "ผลการตรวจสอบ" Slip No. ${data}`;
        break;
      case 'LTX004':
        subject = `{ STA-Test } รบกวนพิจารณาทบทวน "การอนุมัติ Reject น้ำยางสดรับเข้า" Slip No. ${data}`;
        break;
      case 'LTX005':
        subject = `{ STA-Test } รบกวน ทบทวน "ผลการตรวจสอบ" Slip No. ${data}`;
        break;
      case 'LTX006':
        subject = `{ STA-Test } แจ้งผลการพิจารณา "อนุมัติ Reject น้ำยางสดรับเข้า" Slip No. ${data}`;
        break;
      case 'LTX007':
        subject = `{ STA-Test } รบกวนพิจารณารับภายใต้เงื่อนไข น้ำยางสดรับเข้า Slip No. ${data}`;
        break;
      case 'LTX008':
        subject = `{ STA-Test } รบกวน Retest ค่า VFA Slip No. ${data}`;
        break;
      case 'LTX009':
        subject = `{ STA-Test } รบกวนพิจารณาทบทวน "การอนุมัติ Reject น้ำยางสดรับเข้า" Slip No. ${data}`;
        break;
      case 'LTX011':
        subject = `{ STA-Test } รบกวน ทบทวน "ผลการทดสอบ" Slip No. ${data}`;
        break;
      case 'LTX012':
        subject = `{ STA-Test } แจ้งผลการพิจารณา "อนุมัติ Reject น้ำยางสดรับเข้า" Slip No. ${data}`;
        break;
    
      default:
        break;
    }

    return subject;
  }

  async post(body) {
    // let body = param.body;
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", body.Module)
      // .input("SessionEmpId", param.SessionEmpId)

      .input("Id", body.Id)
      .input("EmpId", body.EmpId)

      .output("pStatus")
      .output("pMessage")

      .execute("USP_Get_MailInfo");

    return res;
  }
}

module.exports = new emailService();