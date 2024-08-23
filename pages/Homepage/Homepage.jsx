import React, { useEffect } from 'react';
import './homepage.css';

function Homepage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.Homepage_h1').classList.add('active');
      console.log('active klassen tillagd');
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='Homepage'>
      <section className='Homepage_text'>
        <h1 className='Homepage_h1'>Rindert van Dijk</h1>
        <h2 className='Homepage_h2'>Frontend utvecklar student</h2>
        <p className='Homepage_p'>
          Mina kompetenser för tillfället är: UX/UI, HTML, CSS, JavaScript, React, Backend med Node. Dessutom är jag bekant med verktyg som Git och Github och är van vid att jobba agilt.
          Innan min utbildning är över, kommer jag även lära mig mer om Fullstack webbapplikationer och Driftsättning i Molnmiljö.
        </p>
      </section>
    </section>
  );
}


export default Homepage;