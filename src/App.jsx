import { useState } from 'react';
import './App.css';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Projects from '../pages/Project/Projects';
import Skills from '../pages/Skills/Skills';
import Homepage from '../pages/Homepage/Homepage';
import Header from '../Components/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <Header />
    <div id="home"><Homepage /></div>
    <div id="about"><About /></div>
    <div id="projects"><Projects /></div>
    <div id="skills"><Skills /></div>
    <div id="contact"><Contact /></div>
  </div>
  );
}

export default App;