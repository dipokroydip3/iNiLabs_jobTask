// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Feature from "./components/Feature"
import Hero from "./components/Hero"
import Loved from "./components/Loved"
import Navbar from "./components/Navbar"
import Teams from "./components/Teams"
import Tools from "./components/Tools"
import Trusted from "./components/Trusted"
import WayWork from "./components/WayWork"
import Ways from "./components/Ways"
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
      <Ways></Ways>
      <Teams></Teams>
      <WayWork></WayWork>
      <Loved></Loved>
    </div>
  )
}

export default App
