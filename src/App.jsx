import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from './components/Loader'
import Hero from './components/Hero'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <>
    <BrowserRouter>
    {loading?(
      <Loader/>
    ):(
      <>
        <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/></>
    
    )}
    
    <Routes>
  
  
      </Routes></BrowserRouter>
      {/* {loading ? (
        <Loader />
      ) : (
        <Hero />
      )} */}
    
    </>
  );
}

export default App;
