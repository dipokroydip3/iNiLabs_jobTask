// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Trusted from "./components/Trusted"

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Trusted></Trusted>
    </div>
  )
}

export default App
