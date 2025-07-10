import { useState } from 'react'
import './App.css'
import Navigation from './nav.jsx'
import MainText from './mainSection.jsx'
import About from './about.jsx'
import Projects from './projects.jsx'
// import Contact from './contact.jsx'

function App() {
  return (
    <>
      <main>
        <MainText></MainText>
        <About></About>
      </main>
      <Navigation id="navigation"></Navigation>
    </>
  )
}

export default App
