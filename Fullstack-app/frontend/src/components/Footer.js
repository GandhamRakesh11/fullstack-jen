import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
        color: "#fff",
        padding: "20px",
        marginTop: "40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "16px",
          letterSpacing: "0.5px",
          transition: "color 0.3s ease",
          cursor: "default",
        }}
        onMouseEnter={(e) => (e.target.style.color = "#ffeb3b")}
        onMouseLeave={(e) => (e.target.style.color = "#fff")}
      >
        © {new Date().getFullYear()} 🚀 Fullstack App | Built with ❤️
      </p>
    </footer>
  );
}

export default Footer;
