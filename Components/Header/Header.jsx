import './header.css'

function Header() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='header'>
      <nav>
        <ul className='header_link'>
          <li><button onClick={() => scrollToSection("home")}>Home</button></li>
          <li><button onClick={() => scrollToSection("about")}>About</button></li>
          <li><button onClick={() => scrollToSection("experiences")}>Experiences</button></li>
          <li><button onClick={() => scrollToSection("skills")}>Skills</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
        </ul>
      </nav>
    </section>
  )
}

export default Header;