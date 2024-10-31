// Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-wrapper">
        <img src="logo.png" alt="Logo" />
        <nav>
          <ul>
            <li><a href="#buy">BUY</a></li>
            <li><a href="https://t.me/noearmemes" target="_blank" rel="noopener noreferrer">MEMES</a></li>
            <li><a href="https://t.me/noeartoken" target="_blank" rel="noopener noreferrer">COMMUNITY</a></li>
            <li><a href="https://x.com/noeartoken" target="_blank" rel="noopener noreferrer">TWITTER</a></li>
            <li><a href="https://github.com/noearprotocol" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;