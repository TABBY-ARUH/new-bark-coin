import React from 'react';
import About from './About';
import Development from './Development';
import Vision from './Vision';
import Tokenomics from './Tokenomics';
import Roadmap from './Roadmap';

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <section id="about">
        <About />
      </section>
      <section id="development">
        <Development />
      </section>
      <section id="vision">
        <Vision />
      </section>
      <section id="tokenomics">
        <Tokenomics />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      {/* Add more sections as needed */}
    </div>
  );
};

export default MainContent;
