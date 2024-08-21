import React, { useState } from 'react';
import './about.css';


function About() {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <section className='about'>
      <div className="grid-container">
      <div className="left-panel">
  <div className="click-indicator">Click on me 👇</div>
  <img src="src/assets/jag.png" alt="bild på mig" onClick={toggleText} />
</div>
        {showText && (
          <div className='about_overlay'>
             <h2 className='about_h2'>Jag heter Rindert van Dijk, är 27 år gammal och bor i vackra Karlstad.
              Ursprungligen kommer jag från Nederländerna,
              men flyttade till Sverige när jag var ung.
              För närvarande studerar jag till frontend-utvecklare,
              en utbildning som jag tycker är både utmanande och spännande.

              När jag inte är upptagen med mina studier,
              tycker jag om att spela golf. Det finns få saker som är så avkopplande
              som en dag på golfbanan. Jag gillar också att umgås med mina vänner,
              vare sig det handlar om att ta en fika på stan,
              spela sällskapsspel eller njuta av en trevlig middag.

              Att resa när tillfälle ges är en annan passion jag har;
              jag älskar att utforska nya platser och kulturer.
            </h2>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;


          
         