// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Feature from "./components/Feature"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Tools from "./components/Tools"
import Trusted from "./components/Trusted"
import WorkTogether from "./components/WorkTogether"

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Trusted></Trusted>
      <Feature></Feature>
      <WorkTogether></WorkTogether>
      <Tools></Tools>
    </div>
  )
}

export default App
