import React, { useState } from 'react';
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Stänger menyn när man klickar på en länk
  };

  return (
    <>
      <button className='hamburger' onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'} {/* Byter ikon när menyn är öppen */}
      </button>
      <section id="mainHeader" className='header'>
        <ul className={`header_link ${menuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection("home")}>Start</button></li>
          <li><button onClick={() => scrollToSection("about")}>Om mig</button></li>
          <li><button onClick={() => scrollToSection("experiences")}>Erfarenheter</button></li>
          <li><button onClick={() => scrollToSection("skills")}>Kompetenser</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Kontakt</button></li>
        </ul>
        </section>
    </>
  );
}

export default Header;
