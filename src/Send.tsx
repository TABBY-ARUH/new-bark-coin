// src/pages/Send.tsx
import React, { useState } from 'react';

const Send: React.FC = () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = () => {
    // Add logic to send Bark Coin
    console.log(`Sending ${amount} BARK to ${address}`);
  };

  return (
    <div>
      <h1>Send Bark Coin</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <div>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Send;
