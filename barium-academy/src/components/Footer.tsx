import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"  // ← Add this ID
      style={{
        padding: "2rem",
        backgroundColor: "#ffffff",
        textAlign: "center",
        borderTop: "1px solid #ddd",
      }}
    >
      <p style={{ marginBottom: "1rem", color: "#555" }}>
        © {new Date().getFullYear()} Barium Academy. All rights reserved.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
        <a
          href="https://www.instagram.com/bariumacademy/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}

const linkStyle: React.CSSProperties = {
  color: "#0077ff",
  textDecoration: "none",
  fontWeight: 500,
};
