import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        made with <span className="heart">❤️</span> by{" "}
        <a
          href="https://github.com/adikyochan"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Adidev J J
        </a>
      </p>
    </footer>
  );
}
