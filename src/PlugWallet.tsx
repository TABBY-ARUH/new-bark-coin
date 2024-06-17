import React, { useState } from 'react';

const PlugWallet = () => {
  const [principalId, setPrincipalId] = useState<string | null>(null);

  const handleLogin = async () => {
    // Ensure the Plug Wallet API is loaded
    if (!window.ic?.plug) {
      alert('Plug Wallet is not available. Please make sure the Plug Wallet extension is installed.');
      return;
    }

    const connected = await window.ic.plug.requestConnect();
    if (connected) {
      const principalId = await window.ic.plug.getPrincipal();
      setPrincipalId(principalId.toText());
    }
  };

  return (
    <div>
      <h1>Plug Wallet Integration</h1>
      <button onClick={handleLogin}>Login with Plug Wallet</button>
      {principalId && <p>Logged in as: {principalId}</p>}
    </div>
  );
};

export default PlugWallet;
