import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #667eea, #764ba2)",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Logo / Brand */}
      <div style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}>
        🚀 Fullstack App
      </div>

      {/* Nav Links */}
      <div>
        <Link
          to="/"
          style={{
            color: "#fff",
            margin: "0 15px",
            textDecoration: "none",
            fontSize: "16px",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#ffeb3b")}
          onMouseLeave={(e) => (e.target.style.color = "#fff")}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            color: "#fff",
            margin: "0 15px",
            textDecoration: "none",
            fontSize: "16px",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#ffeb3b")}
          onMouseLeave={(e) => (e.target.style.color = "#fff")}
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
