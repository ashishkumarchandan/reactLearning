import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './exercise/solution/Greet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* this is the component most basic part of react */}
      <div>Component 🤝</div>
      <Greet />
    </>
  )
}

export default App
