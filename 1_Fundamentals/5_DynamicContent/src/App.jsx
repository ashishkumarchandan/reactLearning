import { useState } from "react";
import "./App.css";
import Greeting from "./exercise/solution/Greeting";
import ProductInfo from "./exercise/solution/ProductInfo";

function App() {
  const [count, setCount] = useState(0);
  const myName = "Ashish Kumar Chandan";
  const multiply = (a, b) => a * b;
  const specialClass = "special-class";

  return (
    <>
      <div>
        <h1>Hello {myName}</h1>
        <p>2+2 = {2+2}</p>
        
        <p>3*2 = {multiply(3,2)}</p>
        <p className={specialClass}>I am a special class</p>
      </div>
      <Greeting />
      <ProductInfo />
    </>
  );
}

export default App;
