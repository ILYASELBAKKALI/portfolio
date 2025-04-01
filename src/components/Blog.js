import React from "react";

function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2>Blog</h2>
        <div className="blog-posts">
          <div className="post-item">
            <h3>How to Build a Responsive Website</h3>
            <p>In this blog post, I share tips and tricks for building websites that look great on all devices.</p>
          </div>
          <div className="post-item">
            <h3>Why Web Accessibility Matters</h3>
            <p>Web accessibility is crucial for creating inclusive online experiences. Here's why it matters and how to implement it.</p>
          </div>
          <div className="post-item">
            <h3>Top 10 Web Development Tools in 2025</h3>
            <p>Here are some of the best tools every developer should use in 2025 to improve productivity and efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
