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
          <li><button onClick={() => scrollToSection("about")}>Om mig</button></li>
          <li><button onClick={() => scrollToSection("experiences")}>Erfarenheter</button></li>
          <li><button onClick={() => scrollToSection("skills")}>Kompetenser</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Kontakt</button></li>
        </ul>
      </nav>
    </section>
  )
}

export default Header;