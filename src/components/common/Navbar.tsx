/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";
import info from "../../data/user";

interface NavBarProps {
  navItems: string[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar-container">
      <a
        href="#"
        className={`navbar-icon ${isScrolled ? "scrolled" : ""}`}
        aria-label="Scroll to Top"
      >
        <img src={info.about.animatedphilsrc} alt="Animated Phil" />
      </a>

      <nav className="navbar-custom">
        <ul className="navbar-nav-custom">
          {navItems.map((item, index) => (
            <li
              key={item}
              className="nav-item-custom"
              onClick={() => setSelectedIndex(index)}
            >
              <a
                className={`nav-link-custom ${
                  selectedIndex === index ? "active" : ""
                }`}
                href={item.toLowerCase() === "home" ? "#" : `#${item.toLowerCase()}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;