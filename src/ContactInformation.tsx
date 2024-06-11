import React from 'react';
import Layout from './Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';

const ContactInformation = () => {
  return (
    <Layout>
      <div className="contact-information">
        <h2>Contact Information</h2>
        <ul>
          <li><FontAwesomeIcon icon={faGlobe} /> Website: <a href="https://www.barkcoin.com">www.barkcoin.com</a></li>
          <li><FontAwesomeIcon icon={faEnvelope} /> Email: contact@barkcoin.com</li>
          <li><FontAwesomeIcon icon={faTwitter} /> Twitter: <a href="https://twitter.com/BarkCoinOfficial">@BarkCoinOfficial</a></li>
          <li><FontAwesomeIcon icon={faTelegram} /> Telegram: <a href="https://t.me/BarkCoinCommunity">t.me/BarkCoinCommunity</a></li>
          <li><FontAwesomeIcon icon={faDiscord} /> Discord: <a href="https://discord.gg/BarkCoin">discord.gg/BarkCoin</a></li>
        </ul>
        <p>Disclaimer: This whitepaper serves as a guide for informational purposes only and does not constitute financial or investment advice. Potential investors are advised to conduct their own research and seek professional advice before making any investment decisions. Bark Coin is not liable for any losses incurred as a result of investment in its tokens.</p>
      </div>
    </Layout>
  );
};

export default ContactInformation;
