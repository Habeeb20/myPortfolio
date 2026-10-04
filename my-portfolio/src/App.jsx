import React from 'react'
import Hero from './pages/Hero'
import Navbar from './component/Navbar'
import Projects from './pages/Project'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Footer from './pages/Footer'
import MobileApps from './pages/MobileApp'
const App = () => {
  return (
    <div>
<div className="min-h-screen bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors duration-300 overflow-x-hidden">
  <Navbar />
  <Hero/>
  <Projects />

  <MobileApps/>
  <Skills/>
  <Experience/>
  <Footer />
</div>

    
      
    </div>
  )
}

export default App
