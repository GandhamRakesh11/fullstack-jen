import React from "react";

function About() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
        textAlign: "center",
        background: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          color: "#fff",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        🌟 About Us
      </h1>

      {/* Card Section */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.6" }}>
          Welcome to <strong>Fullstack App</strong> 🚀 – a modern web
          application built with <span style={{ color: "#764ba2" }}>React</span>{" "}
          on the frontend and <span style={{ color: "#667eea" }}>Node.js</span>{" "}
          on the backend.
        </p>

        <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.6" }}>
          Our mission is to provide a seamless fullstack development experience
          with clean code, modern UI, and robust APIs. 💻✨
        </p>

        <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.6" }}>
          This project is running on{" "}
          <strong>Dockerized containers in AWS EC2</strong>, making deployment
          and scaling super easy ⚡.
        </p>
      </div>
    </div>
  );
}

export default About;
