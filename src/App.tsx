import React from 'react';
import './App.css'; // Import your global styles here if needed
import Header from './Header';
import WelcomePage from './WelcomePage'; // Import WelcomePage component here
import About from './About';
import Development from './Development';
import Vision from './Vision';
import Tokenomics from './Tokenomics';
import Roadmap from './Roadmap';
import CommunityGovernance from './CommunityGovernance';
import SecurityPrivacy from './SecurityPrivacy';
import Conclusion from './Conclusion';
import ContactInformation from './ContactInformation';
import BarkCoinBackstory from './BarkCoinBackstory';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <WelcomePage /> {/* Include WelcomePage component */}
      <BarkCoinBackstory />
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
