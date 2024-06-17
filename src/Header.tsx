import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Bark Coin</Link> {/* Use Link instead of anchor tag */}
      </div>
      <nav className="nav">
        <ul>
          {/* Use Link components for internal navigation */}
          <li><Link to="#about">About</Link></li>
          <li><Link to="#development">Development</Link></li>
          <li><Link to="#vision">Vision</Link></li>
          <li><Link to="#tokenomics">Tokenomics</Link></li>
          <li><Link to="#roadmap">Roadmap</Link></li>
          <li><Link to="#community-governance">Community Governance</Link></li>
          <li><Link to="#security-privacy">Security & Privacy</Link></li>
          <li><Link to="#conclusion">Conclusion</Link></li>
          <li><Link to="#contact-information">Contact Information</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
