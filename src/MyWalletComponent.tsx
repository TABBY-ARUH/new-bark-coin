import React, { useEffect, useRef, useState } from 'react';

const MyWalletComponent = () => {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const plugRef = useRef(null);

  useEffect(() => {
    if ((window as any).plug) {
      const plug = (window as any).plug;
      plug.init({
        env: 'production',
        apiKey: 'your-api-key', // Replace with your actual API key
        network: 'icp', // Specify the network (e.g., 'icp' for Internet Computer)
      });

      plug.connect().then((wallet) => {
        console.log('Connected to wallet:', wallet);
        setConnected(true);
        setWalletAddress(wallet.address);
      }).catch((error) => {
        console.error('Failed to connect to wallet:', error);
        // Handle error
      });
    }
  }, []);

  const handleSendTransaction = async () => {
    if ((window as any).plug && connected) {
      try {
        const transaction = await (window as any).plug.sendTransaction({
          to: 'recipient-address',
          value: '1000000000000000000', // 1 ICP in E8s (e.g., 1 ICP = 1 trillion E8s)
        });

        console.log('Transaction sent:', transaction);
        // Update UI or show success message
      } catch (error) {
        console.error('Failed to send transaction:', error);
        // Handle error
      }
    }
  };

  return (
    <div>
      <h1>My Wallet Component</h1>
      {connected ? (
        <div>
          <p>Connected to wallet: {walletAddress}</p>
          <button onClick={handleSendTransaction}>Send Transaction</button>
        </div>
      ) : (
        <p>Connecting to wallet...</p>
      )}
    </div>
  );
};

export default MyWalletComponent;
