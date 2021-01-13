const apiKey = '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'
const sgMail = require('@sendgrid/mail')
const express = require('express')
const app = express()
const path = require('path')
sgMail.setApiKey(apiKey)

app.use(express.urlencoded({extended : false}))


const msg = {
    to: 'wassim.kes213@gmail.com',
    from: 'ouassim.kessir@gmail.com', // Use the email address or domain you verified above
    subject: 'Some mail',
    text: 'this is sent with sendgrid',
    html: '<strong>this is sent with sendgrid</strong>',
  };
  //ES6
  sgMail
    .send(msg)
    .then(() => {}, error => {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    });


