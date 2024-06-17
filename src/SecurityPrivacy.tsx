import React from 'react';
import './SecurityPrivacy.css'; // Make sure this path is correct

const SecurityPrivacy: React.FC = () => {
  return (
    <div className="security-privacy"> {/* class applied here */}
      <h2 className="gold-text">Security and Privacy</h2>
      <p className="gold-text">Privacy: Advanced cryptographic protocols to protect user data and transaction details.</p>
      <p className="gold-text">Security: Regular audits and robust security measures to ensure platform and user safety.</p>
    </div>
  );
};

export default SecurityPrivacy;

