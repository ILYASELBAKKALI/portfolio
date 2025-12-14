import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(`${API_URL}/sendcontact`, {
      firstName,
      lastName,
      phone,
      email,
      message,
    });

    if (response.data.success) {
      console.log("✅ Message envoyé avec succès :", response.data);
      setStatus("Message envoyé avec succès !");
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } else {
      console.error("❌ Échec de l'envoi :", response.data);
      setStatus("Échec de l'envoi du message.");
    }
  } catch (error) {
    console.error("❌ Erreur lors de la requête POST :");
    console.error("Message :", error.message);
    if (error.response) {
      console.error("Réponse serveur :", error.response.data);
      console.error("Code HTTP :", error.response.status);
    } else if (error.request) {
      console.error("Aucune réponse reçue :", error.request);
    } else {
      console.error("Erreur inconnue :", error);
    }

    setStatus("Erreur lors de l'envoi du message.");
  }
};


  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact-info">
            <h3 className="title">Get in touch</h3>
            <p className="text">Envoyez-nous un message et nous vous répondrons rapidement.</p>
          </div>

          <div className="contact-form">
            <h3 className="title">Contact Me</h3>
            {status && <p className="status-message">{status}</p>}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <input type="text" className="contact-input" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                <input type="text" className="contact-input" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </div>

              <div className="row">
                <input type="text" className="contact-input" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                <input type="email" className="contact-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="row">
                <textarea name="message" className="contact-input textarea" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
              </div>
              <button type="submit" className="btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
