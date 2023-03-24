const mailer=require('nodemailer')
require('dotenv').config()
const SendmailTransport = require('nodemailer/lib/sendmail-transport')

let transporter=mailer.createTransport({
    host: 'smtp.gmail.com',
    port:587,
    auth: {
    user: 'reachsalinivl@gmail.com',
    pass: process.env.APP_PASSWORD
  }   
})

let mailOptions = {
  from: 'reachsalinivl@gmail.com',
  to: 'salinivl@protonmail.com',
  subject: 'Hi!',
  text: 'This is a test mail!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
