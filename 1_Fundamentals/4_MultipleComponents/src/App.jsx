import { useState } from 'react'
import './App.css'
import Greet from './components/Greet'
import Add from './components/Add'
import Header from './exercise/solution/Header'
import MainComponent from './exercise/solution/MainComponent'
import Footer from './exercise/solution/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainComponent />
      <Greet />
      <Add />
      <Footer />
    </>
  )
}

export default App
