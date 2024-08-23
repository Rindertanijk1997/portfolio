import React from 'react';
import './projekt.css'; // Importera CSS-filen som vi kommer att skapa

function projekt() {
    const projekt = [
        {
            title: 'PowerNappers backend',
            description: 'Extrajobb vid sidan av studier. Plockar transport och click&collect ordrar till kunder, och fyller på hyllorna genom att köra truck.',
            imageUrl: 'https://example.com/image1.jpg', // Länk till en bild
            projectUrl: 'https://github.com/Rindertanijk1997/PowerNappers.git'
        },
        // Lägg till fler erfarenheter här
    ];

    return (
        <section className="projekt-list">
            <h1 className="projekt-title">Projekt</h1>
            {projekt.map((exp, index) => (
                <div key={index} className="paper">
                    <h4>{exp.title}</h4>
                    <p>{exp.description}</p>
                    <img src={exp.imageUrl} alt={`Bild för ${exp.title}`} style={{ width: '100px', height: '100px' }} />
                    <a href={exp.projectUrl} target="_blank" rel="noopener noreferrer">Se projekt</a>
                </div>
            ))}
        </section>
    );
}

export default projekt;