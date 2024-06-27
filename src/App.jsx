import { useState } from 'react'
import './App.css'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Projects from '../pages/Project/Projects'
import Skills from '../pages/Skills/Skills'
import Homepage from '../pages/Homepage/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
