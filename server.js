const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint richiesto dal tuo frontend
app.post('/sgcaptcha/contact', async (req, res) => {
  const { message } = req.body; 
  // Nota: il tuo frontend invia un FormData con la chiave "message"

  // 1. Configura il trasportatore (usa Gmail o il tuo provider SMTP)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // La tua email (es: shock.pub1@gmail.com)
      pass: process.env.EMAIL_PASS  // Password per le app (non la password normale)
    }
  });

  // 2. Opzioni dell'email
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'shock.pub1@gmail.com', // Dove vuoi ricevere i messaggi
    subject: 'Nuovo Messaggio dal Sito Shock Bar',
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email inviata con successo');
  } catch (error) {
    console.error('Errore invio email:', error);
    res.status(500).send("Errore nell'invio");
  }
});

app.listen(3001, () => console.log('Server in ascolto sulla porta 3001'));