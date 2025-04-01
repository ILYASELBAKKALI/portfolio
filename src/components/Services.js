import React from "react";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Web Design</h3>
            <p>Creating visually appealing and user-friendly websites.</p>
          </div>
          <div className="service-item">
            <h3>Web Development</h3>
            <p>Building powerful and efficient web applications.</p>
          </div>
          <div className="service-item">
            <h3>App Design</h3>
            <p>Designing mobile applications with great user experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
