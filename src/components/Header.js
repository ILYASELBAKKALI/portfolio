import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Welcome to My Website</h1>
        <p>I'm a passionate developer. Let's build something amazing together.</p>
        <a href="#services" className="btn">Explore Services</a>
      </div>
    </header>
  );
}

export default Header;
