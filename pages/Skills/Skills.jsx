import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './skills.css';

function Skills() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Sätter hastigheten till 0 för att skapa en kontinuerlig rullning
    cssEase: 'linear' // Ger en konstant rörelse utan acceleration eller inbromsning
  };

  return (
    <section className='skills'>
      <h1 className='skills_h1'>Skills</h1>
      <section className='skills_right'>
        <Slider {...settings}>
          <div className="skill-bar">
            <img src="src/assets/htmllogo.png" alt="HTML Skill" />
          </div>
          <div className="skill-bar">
            <img src="src/assets/csslogo.png" alt="CSS Skill" />
          </div>
          <div className="skill-bar">
            <img src="src/assets/uxuilogo.png" alt="UX/UI Skill" />
          </div>
          <div className="skill-bar">
            <img src="src/assets/jslogo.png" alt="JavaScript Skill" />
          </div>
          <div className="skill-bar">
            <img src="src/assets/reactlogo.png" alt="React Skill" />
          </div>
          <div className="skill-bar">
            <img src="src/assets/nodelogo.png" alt="Node Skill" />
          </div>
        </Slider>
      </section>
    </section>
  );
}

export default Skills;