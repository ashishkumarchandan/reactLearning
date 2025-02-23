import { useState } from 'react'
import './App.css'
import WelcomeMessage from './exercise/solution/WelcomeMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="section">
        <h1>My Website</h1>
        <article>
          <h2>Welcome to React</h2>
          <p className="text">
            Paragraph content ....
          </p>
        </article>
      </section>
      <WelcomeMessage />
    </>
  )
}

export default App
