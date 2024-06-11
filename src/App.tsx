// App.tsx

import React from 'react';
import Header from './Header';
import About from './About';
import Development from './Development';
import Vision from './Vision';
import Tokenomics from './Tokenomics';
import Roadmap from './Roadmap';
import CommunityGovernance from './CommunityGovernance';
import SecurityPrivacy from './SecurityPrivacy';
import Conclusion from './Conclusion';
import ContactInformation from './ContactInformation';
import './App.css'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Development />
      <Vision />
      <Tokenomics />
      <Roadmap />
      <CommunityGovernance />
      <SecurityPrivacy />
      <Conclusion />
      <ContactInformation />
    </div>
  );
}

export default App;
