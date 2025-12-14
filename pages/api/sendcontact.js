import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, phone, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false, // false pour STARTTLS (port 587)
      auth: {
        user: process.env.CONTACT_EMAIL,     // 908e16001@smtp-brevo.com
        pass: process.env.CONTACT_PASSWORD,  // Ta clé SMTP : BQCOG4UXK8mWEJ0x
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.EMAIL_DESTINATION, // Ton adresse perso ou pro
      subject: `Nouveau message de ${firstName} ${lastName}`,
      text: `Nom : ${firstName} ${lastName}\nTéléphone : ${phone}\nEmail : ${email}\nMessage : ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Message envoyé avec succès !" });
    } catch (error) {
      console.error("Erreur SMTP :", error);
      res.status(500).json({ success: false, message: "Erreur lors de l'envoi de l'email." });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}
