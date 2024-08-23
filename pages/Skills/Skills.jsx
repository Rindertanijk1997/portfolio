import React, { useState, useEffect } from 'react';
import './skills.css';

function Skills() {
  const [angle, setAngle] = useState(0);
  const skills = [
    { src: "src/assets/htmllogo.png", alt: "HTML Skill" },
    { src: "src/assets/csslogo.png", alt: "CSS Skill" },
    { src: "src/assets/uxuilogo.png", alt: "UX/UI Skill" },
    { src: "src/assets/jslogo.png", alt: "JavaScript Skill" },
    { src: "src/assets/reactlogo.png", alt: "React Skill" },
    { src: "src/assets/nodelogo.png", alt: "Node Skill" },
    { src: "src/assets/figma.png", alt: "figma Skill" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAngle(prevAngle => prevAngle + 0.5);
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const calculateOpacity = (index) => {
    const adjustedAngle = (angle + index * (360 / skills.length)) % 360;
    return adjustedAngle > 170 && adjustedAngle < 260 ? 0 : 1;
  };

  return (
    <section className='skills'>
      <h1 className='skills_h1'>Kompetens</h1>
      <div className='skills_right'>
        <div className='skills_center'>
          <img src="src/assets/jordglob.png" alt="Central Image" style={{ width: '100%', height: '100%' }} />
        </div>
        {skills.map((skill, index) => (
          <div className="skill-bar" key={index} style={{
            transform: `rotateY(${angle + index * (360 / skills.length)}deg) translateZ(300px)`,
            opacity: calculateOpacity(index)
          }}>
            <img src={skill.src} alt={skill.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}


export default Skills;