const express = require('express');
const app = express();
//const cors = require('cors');
const bodyParser = require('body-parser');
//const path = require('path');
//const multer = require('multer');
const nodemailer = require('nodemailer');

const port = 5000;
app.use(bodyParser.json({'extended' : true}));
/*app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }))*/
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
    text: `Request type: ${requestType}\n Message from the Customer:\n${message}. Sent from: ${email}`
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

/*const upload = multer({ dest: 'http://thierry.kellyburger.com/damageImg' }); // Destination folder for uploaded images

app.post('/api/upload', upload.single('image'), (req, res) => {
  // Access the uploaded file via req.file
  if (!req.file) {
    res.status(400).json({ error: 'No file uploaded' });
    return;
  }

  // Process the file, e.g., save it to a database or disk
  // Here, we are simply sending back the file information
  res.json({
    filename: req.file.filename,
    originalname: req.file.originalname,
    path: req.file.path
  });
});*/
//App listens to port 5000
app.listen(port, () => {
	console.log(`The backend successfully started on port ${port}!`);
});