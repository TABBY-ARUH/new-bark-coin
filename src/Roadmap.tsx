import React from 'react';
import Layout from './Layout';

const Roadmap = () => {
  return (
    <Layout>
      <div className="roadmap">
        <h2>Roadmap</h2>
        <p>Phase 1: Launch (Q3 2024)</p>
        <ul>
          <li>Website Development</li>
          <li>Initial Coin Offering (ICO)</li>
          <li>Community Building through Social Media</li>
        </ul>
        <p>Phase 2: Expansion (Q4 2024)</p>
        <ul>
          <li>Smart Contract Implementation</li>
          <li>Listing on Major Exchanges</li>
          <li>Marketing Campaigns</li>
        </ul>
        <p>Phase 3: Enhancement (Q1 2025)</p>
        <ul>
          <li>Introduction of Staking and Rewards Programs</li>
          <li>Community Expansion through Partnerships and Events</li>
          <li>Integration of NFTs</li>
        </ul>
        <p>Phase 4: Continuous Development (Q2 2025 onwards)</p>
        <ul>
          <li>Regular Updates and New Features based on Community Feedback</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Roadmap;
