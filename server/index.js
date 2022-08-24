const express = require("express"); 
const app = express(); 
const port = 5000; 

require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.post("/send_mail", cors(), async (req, res) => {
  let { nome } = req.body;
  let { email } = req.body;
  let { assunto } = req.body;
  let { mensagem } = req.body;


  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },

  });

  await transport.sendMail({
    from: `Email portfolio<${email}>`,
    to: "jv.brandao@hotmail.com",
    subject: `${assunto}`,
    html: `<div className="email" style="border: 1px solid black;
        padding: 20px; font-family: sans-serif; line-height:2; font-size: 20px;">
        
        
        <h2>${assunto}</h2>

        <p>Nome: ${nome}</p>
        <p>E-mail: ${email}</p>
        <p>Mensagem: ${mensagem}</p>
  
        
        </div>
        
        `,
  });
});

app.listen(port, () => {
    console.log(`Monitorando porta: ${port}`);
  });
