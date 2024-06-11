// src/Layout.tsx

import React, { ReactNode } from 'react';
import './styles.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      {/* Background container */}
      <div className="background-container" />

      {/* Content */}
      {children}
    </div>
  );
};

export default Layout;




