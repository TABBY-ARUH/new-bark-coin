// src/Home.tsx

import React from 'react';
import Layout from './Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="home">
        <h2>Welcome to Bark Coin</h2>
        <p>
          Bark Coin is a memecoin designed to combine the joy of dog memes with the world of cryptocurrency. With a focus on community engagement, transparent communication, and fun, Bark Coin aims to create a vibrant and profitable investment opportunity for dog lovers and crypto enthusiasts alike.
        </p>
        <p>
          Our mission is to create a community where dog lovers can come together to share stories, exchange tips, and support each other, all while using Bark Coin for transactions and rewards.
        </p>
      </div>
    </Layout>
  );
};

export default Home;



