import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/sendcontact", { firstName, lastName, phone, email, message });

      if (response.data.success) {
        setStatus("Message envoyé avec succès !");
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Échec de l'envoi du message.");
      }
    } catch (error) {
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
