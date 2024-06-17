import React from 'react';
import './ContactInformation.css'; // Make sure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';

const ContactInformation: React.FC = () => {
  return (
    <div className="contact-information">
      <h2 className="gold-text">Contact Information</h2>
      <ul className="contact-list">
        <li><FontAwesomeIcon icon={faGlobe} /> Website: <a href="https://www.barkcoin.com">www.barkcoin.com</a></li>
        <li><FontAwesomeIcon icon={faEnvelope} /> Email: contact@barkcoin.com</li>
        <li><FontAwesomeIcon icon={faTwitter} /> Twitter: <a href="https://twitter.com/BarkCoinOfficial">@BarkCoinOfficial</a></li>
        <li><FontAwesomeIcon icon={faTelegram} /> Telegram: <a href="https://t.me/BarkCoinCommunity">t.me/BarkCoinCommunity</a></li>
        <li><FontAwesomeIcon icon={faDiscord} /> Discord: <a href="https://discord.gg/BarkCoin">discord.gg/BarkCoin</a></li>
      </ul>
    </div>
  );
};

export default ContactInformation;
