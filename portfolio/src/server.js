const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 5000;
const nodemailer = require('nodemailer');
app.use(bodyParser.json({'extended' : true}));
app.use(cors());
// Create a transporter
const transporter = nodemailer.createTransport({
    host: "asmtp.mail.hostpoint.ch",
    port: 465,
    secure: true,
    auth: {
      user: 'thierry@kellyburger.com',
      pass: 'tc1Erfus'
    }
  });

app.post("/api/send-email", (request, response) => {
const {email, message, requestType} = request.body;
    // Define the email options
  const mailOptions = {
    from: 'kontakt@setup-flick.ch',
    to: 'thierry@kellyburger.com',
    subject: 'Test Email',
    text: `Request type: ${requestType}\n Message from the Customer:\n${message}. Sent from ${email}`
  }
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred:', error.message);
    } else {
      console.log('Email sent successfully!');
      response.sendStatus(200);
    }
  });
});
//App listens to port 5000
app.listen(port, () => {
	console.log(`The backend successfully started on port ${port}!`);
});