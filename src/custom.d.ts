// custom.d.ts

interface Window {
    plug: {
      init: (config: { env: string; apiKey: string; network: string }) => void;
      connect: () => Promise<any>;
      // Add other methods you intend to use from Plug Wallet
    };
  }
  