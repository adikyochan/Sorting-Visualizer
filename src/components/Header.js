import React from "react";
import "./Header.css";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <h1 className="site-title">Sort Visualizer</h1>
        <nav className="nav-links">
          <a href="#home"><GitHubIcon  /></a>

        </nav>
      </div>
    </header>
  );
}
