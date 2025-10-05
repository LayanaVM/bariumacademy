import React from "react";
import logo from "../assets/logo.png"; // update the path if needed

export default function Header() {
  return (
    <header className="header" style={headerStyle}>
      {/* Logo Section */}
      <div className="logo" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <img src={logo} alt="Barium Academy Logo" style={{ height: "100px" }} />
      </div>

      {/* Navigation */}
      <nav className="nav" style={navStyle}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#courses">Courses</a>
        <a href="#registration">Demo</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

// Inline styles
const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const navStyle: React.CSSProperties = {
  display: "flex",
  gap: "2rem",
  fontWeight: 700,
  fontSize: "1.2rem",
};
