import React, { useState } from "react";
import "./styles/Navbar.css";

interface NavBarProps {
  navItems: string[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  return (
    <nav className="navbar-custom">
      <ul className="navbar-nav-custom">
        {navItems.map((item, index) => (
          <li
            key={item}
            className="nav-item-custom"
            onClick={() => setSelectedIndex(index)}
          >
            <a
              className={`nav-link-custom ${selectedIndex === index ? "active" : ""}`}
              href={item.toLowerCase() === "home" ? "#" : `#${item.toLowerCase()}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;