// WelcomePage.tsx
import React from 'react';
import './WelcomePage.css';

const WelcomePage: React.FC = () => {
    const handleBuyButtonClick = () => {
        // Implement your buy button functionality here
        console.log('Buy BarkCoin clicked!');
    };

    return (
        <div className="welcome-page">
            <h1>Welcome to BarkCoin!</h1>
            <p>
                BarkCoin is the most playful and community-driven cryptocurrency out there. Join the fun and buy some BarkCoins today!
            </p>
            <button className="buy-button" onClick={handleBuyButtonClick}>
                Buy BarkCoin
            </button>
        </div>
    );
};

export default WelcomePage;



