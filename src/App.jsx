import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import WorkingDetails from './components/WorkingDetails'
import FutureFeatures from './components/FutureFeatures'
import Impact from './components/Impact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <WorkingDetails />
      <FutureFeatures />
      <Impact />
    </div>
  )
}

export default App
