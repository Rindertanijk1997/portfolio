import React from 'react'
import './skills.css'

function Skills() {
  return (
    <section className='skills'>

    <section className='skills_h1'>Skills</section>

    <section className='skills_left'>
    <ul>
  <li>
    <div className="skill-icon">
      <div className="skill-icon-inner"></div>
    </div>
    Arbeta agilt
  </li>
  <li>
    <div className="skill-icon">
      <div className="skill-icon-inner"></div>
    </div>
    Kan jobba både i team och själv
  </li>
  <li>
    <div className="skill-icon">
      <div className="skill-icon-inner"></div>
    </div>
    Bra tidsuppfattning
  </li>
  <li>
    <div className="skill-icon">
      <div className="skill-icon-inner"></div>
    </div>
    text
  </li>
  <li>
    <div className="skill-icon">
      <div className="skill-icon-inner"></div>
    </div>
    text
  </li>
  <li>
    <div className="skill-icon">
      <div className="skill-icon-inner"></div>
    </div>
    text
  </li>
</ul>
    </section>
    <section className='skills_right'>
  <ul>
    <li>
      HTML
      <div className="skill-bar">
        <div className="skill-level" style={{width: '50%'}}></div>
      </div>
    </li>
    <li>
      CSS
      <div className="skill-bar">
        <div className="skill-level" style={{width: '40%'}}></div>
      </div>
    </li>
    <li>
      UX/UI
      <div className="skill-bar">
        <div className="skill-level" style={{width: '30%'}}></div>
      </div>
    </li>
    <li>
      JAVASCRIPT
      <div className="skill-bar">
        <div className="skill-level" style={{width: '30%'}}></div>
      </div>
    </li>
    <li>
      REACT
      <div className="skill-bar">
        <div className="skill-level" style={{width: '40%'}}></div>
      </div>
    </li>
    <li>
      NODE
      <div className="skill-bar">
        <div className="skill-level" style={{width: '35%'}}></div>
      </div>
    </li>
  </ul>
</section>

  </section>
  )
}

export default Skills