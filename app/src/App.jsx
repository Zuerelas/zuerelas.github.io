import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyComponent() {
  return <h1>Hello, I am Delta</h1>;
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <MyComponent></MyComponent>
    </>
  )
}

export default App;
