import { useState } from 'react'
import './App.css'
import Navigation from './nav.jsx'

function MainText() {
  return <h1>Hello, I am Delta</h1>;
}

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
