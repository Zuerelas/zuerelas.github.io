import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyComponent(props) {
  return <h1>Hello, I am learning {props.name}</h1>;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent name="React"></MyComponent>
    </>
  )
}

export default App;
