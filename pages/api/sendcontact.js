import nodemailer from 'nodemailer';

// Configuration de l'e-mail
const CONTACT_HOST = 'smtp.gmail.com';
const CONTACT_PORT = 587;
const CONTACT_EMAIL = 'jobilyaselbakkali@gmail.com';
const CONTACT_PASSWORD = 'Ilyas.2022';
const EMAIL_DESTINATION = 'ilyas.elbakkali101@gmail.com';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, phone, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: CONTACT_HOST,
      port: CONTACT_PORT,
      secure: false, // true pour le port 465
      auth: {
        user: CONTACT_EMAIL,
        pass: CONTACT_PASSWORD,
      },
    });

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
      console.error(error);
      res.status(500).json({ success: false, message: "Erreur lors de l'envoi de l'email." });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}
