import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section className='header'>
      <nav>
        <ul className='header_link'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
        </ul>
      </nav>
    </section>
  )
}

export default Header;