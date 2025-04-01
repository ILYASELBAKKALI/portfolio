import React from "react";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="portfolio-gallery">
          <div className="portfolio-item">
            <img src="image1.jpg" alt="Project 1" />
            <h3>Project 1</h3>
          </div>
          <div className="portfolio-item">
            <img src="image2.jpg" alt="Project 2" />
            <h3>Project 2</h3>
          </div>
          <div className="portfolio-item">
            <img src="image3.jpg" alt="Project 3" />
            <h3>Project 3</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
