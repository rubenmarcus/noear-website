// Header.tsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className="header-wrapper">
        <img src="logo.png" alt="Logo" />
        {isMobile ? (
          <>
            <div className="hamburger-icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </div>
            <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <a href="#buy" onClick={toggleMenu}>
                    BUY
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/noearmemes"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMenu}
                  >
                    MEMES
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/noeartoken"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMenu}
                  >
                    COMMUNITY
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/noeartoken"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMenu}
                  >
                    TWITTER
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/noearprotocol"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMenu}
                  >
                    GITHUB
                  </a>
                </li>
              </ul>
            </nav>{" "}
          </>
        ) : (
          <nav>
            <ul>
              <li>
                <a href="#buy">BUY</a>
              </li>
              <li>
                <a
                  href="https://t.me/noearmemes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MEMES
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/noeartoken"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COMMUNITY
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/noeartoken"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TWITTER
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/noearprotocol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
