const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Permet à React d'accéder au serveur

// Configuration de l'e-mail
const CONTACT_EMAIL = "jobilyaselbakkali@gmail.com"; // Ton email Gmail
const CONTACT_PASSWORD = "Ilyas.2022"; // Ton mot de passe d'application Gmail
const EMAIL_DESTINATION = "ilyas.elbakkali101@gmail.com"; // Email qui recevra les messages

// Configurer Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: CONTACT_EMAIL,
    pass: CONTACT_PASSWORD,
  },
});

// Route API pour envoyer l'email
app.post("/sendcontact", async (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;

  const mailOptions = {
    from: CONTACT_EMAIL,
    to: EMAIL_DESTINATION,
    subject: `Nouveau message de ${firstName} ${lastName}`,
    text: `Nom : ${firstName} ${lastName}\nTéléphone : ${phone}\nEmail : ${email}\nMessage : ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur d'envoi:", error);
    res.status(500).json({ success: false, message: "Erreur lors de l'envoi de l'email." });
  }
});

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));
