import { useState } from 'react'
import './App.css'
import Navigation from './nav.jsx'
import MainText from './mainSection.jsx'
import About from './about.jsx'

function App() {
  return (
    <>
      <Navigation id="navigation"></Navigation>
      <main>
        <MainText></MainText>
        <About></About>
      </main>
    </>
  )
}

export default App
