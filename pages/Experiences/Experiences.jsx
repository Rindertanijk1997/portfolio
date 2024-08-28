import React from 'react';
import './experiences.css'; // Importera CSS-filen som vi kommer att skapa

function Experience() {
  const experiences = [
    {
      period: '2024 - pågående',
      title: 'Ikea Logistik',
      description: 'Extrajobb vid sidan av studier. Plockar transport och click&collect ordrar till kunder, och fyller på hyllorna genom att köra truck.',
    },
    {
      period: '2021 - 2023',
      title: 'Isoleringsplåtslagare',
      description: 'Isolerade och plåtade kanaler och rör på Bilfinger ab.',
    },
    {
      period: '2019 - 2021',
      title: 'CNC operatör',
      description: 'Jobbade på Hedbergs mekaniska som CNC operatör, programmerade svarvar och ställde in alla verktyg, så att maskinen på ett så enkelt sätt kunde svarva sina detaljer',
    },
    {
      period: '2017 - 2019',
      title: 'Produktionsoperatör',
      description: 'Jobbade som operatör på Uddeholm ab i värmebehandlingen. Härdade stål genom att lägga stålet i ugnar och sedan vatten, tills det fick rätt hårdhet',
    }
  ];

  
  return (
    <section className="experience-list">
      <h1 className="experience-title">Erfarenheter</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="paper">
          <h3>{exp.period}</h3>
          <h4>{exp.title}</h4>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;