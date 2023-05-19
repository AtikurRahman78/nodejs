const nodemailer = require("nodemailer");

async function emailVerification(email, subject, template){

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL,
          pass: process.env.APP_PASSWORD, 
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: 'Orebi', 
        to: email, 
        subject: subject, 
        html: template, 
      });

}


module.exports = emailVerification;