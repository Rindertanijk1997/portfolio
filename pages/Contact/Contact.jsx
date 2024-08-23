import React from 'react'
import './contact.css'

function Contact() {
  return (
    <section className='contact'>
      <h1 className='contact-h1'>Kontakt</h1>
      <section className='contact-uppgifter'>
        <section className='contact-uppgifter-telefon'>
          <h2>Telefon:</h2>
          <p>0730205483</p>
        </section>
        <section className='contact-uppgifter-linkedin'>
          <a href="https://www.linkedin.com/in/rindertvandijk" target="_blank">
            Besök min LinkedIn
            <img src="src/assets/linkedin.png" alt="LinkedIn Logo" class="linkedin-logo" />
          </a>
        </section>
        <section className='contact-uppgifter-mail'>
          <a href="mailto:rindert.vandijk@hotmail.se?subject=Feedback från webbsidan&body=Hej, jag vill gärna komma i kontakt med dig angående...">
            Skicka mail till mig
            <img src="src/assets/epostlogo.png" alt="Epost Logo" class="email-logo" />
          </a>
        </section>
      </section>


    </section>
  )
}

export default Contact