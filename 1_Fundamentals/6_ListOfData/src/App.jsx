import { useState } from "react";
import "./App.css";
import Shopping from "./Shopping";
import ProductList from "./exercise/solution/ProductList";
import UserList from "./exercise/solution/UserList";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const usersInfo = [
    {
      username: "freak",
      email: "freak@gmail.com",
      location: "Bihar, INDIA",
    },
    {
      username: "Ashish",
      email: "ashish@gmail.com",
      location: "Pune, INDIA",
    },
    {
      username: "Nyaa",
      email: "Nyaa@gmail.com",
      location: "Delhi, India",
    },
  ];

  return (
    <>
      {/* Display Numbers */}
      <div>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>

      {/* Display Users */}
      <div>
        <ul>
          {usersInfo.map((user, index) => (
            <li key={index}>
              <span>Username: {user.username}</span>
              <br />
              <span>Email: {user.email}</span>
              <br />
              <span>Location: {user.location}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Shopping List */}
      <Shopping items={["Wireless Earbuds", "Power Bank", "New SSD", "Hoodie"]} />
      <ProductList />
      <UserList />
    </>
  );
}

export default App;
