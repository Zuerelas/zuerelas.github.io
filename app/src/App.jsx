import { useState } from 'react'
import './App.css'
import navigationMenu from './nav';

function MyComponent() {
  return <h1>Hello, I am Delta</h1>;
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <navigationMenu></navigationMenu>
      <MyComponent></MyComponent>
    </>
  )
}

export default App
