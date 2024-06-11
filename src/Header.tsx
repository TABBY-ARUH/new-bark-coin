// src/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Bark Coin</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#development">Development</a></li>
          <li><a href="#vision">Vision</a></li>
          <li><a href="#tokenomics">Tokenomics</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#community-governance">Community Governance</a></li>
          <li><a href="#security-privacy">Security & Privacy</a></li>
          <li><a href="#conclusion">Conclusion</a></li>
          <li><a href="#contact-information">Contact Information</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


