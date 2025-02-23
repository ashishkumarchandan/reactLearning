import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <>
      <div>
        <p>h11</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" value={name} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
