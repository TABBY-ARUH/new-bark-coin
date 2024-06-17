import React from 'react';
import './CommunityGovernance.css'; // Make sure this path is correct

const CommunityGovernance: React.FC = () => {
  return (
    <div className="community-governance"> {/* class applied here */}
      <h2 className="gold-text">Community and Governance</h2>
      <p className="gold-text">DAO Model: Decentralized Autonomous Organization for democratic and transparent governance.</p>
      <p className="gold-text">Engagement: Regular AMAs, events, and reward programs to keep the community active and engaged.</p>
    </div>
  );
};

export default CommunityGovernance;

