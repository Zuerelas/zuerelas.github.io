import { useState } from 'react'
import './App.css'
import Navigation from './nav.jsx'
import MainText from './mainSection.jsx'

function App() {
  return (
    <>
      <Navigation id="navigation"></Navigation>
      <main>
        <MainText></MainText>
      </main>
    </>
  )
}

export default App
