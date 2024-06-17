import React from 'react';
import Layout from './Layout';
import PieChart3D from './PieChart3D';

const Tokenomics: React.FC = () => {
  return (
    <Layout>
      <div className="tokenomics">
        <h2>Tokenomics</h2>
        <p>Bark Coin has a total supply of 1 billion tokens distributed as follows:</p>
        <PieChart3D />
      </div>
    </Layout>
  );
};

export default Tokenomics;

