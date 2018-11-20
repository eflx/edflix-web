
import nodemailer from '../node_modules/nodemailer/lib/sendmail-transport/index'
export default class MailSend {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  })

  sendemail () {
    let mailOptions = {
      from: 'youremail@gmail.com',
      to: 'myfriend@yahoo.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    }
    this.transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        alert(error)
      } else {
        alert(info.response)
      }
    })
  }
}
