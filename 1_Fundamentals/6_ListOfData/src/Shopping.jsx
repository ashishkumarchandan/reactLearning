import React from "react";
import "./Shopping.css";

const Shopping = ({ items }) => {
  return (
    <div>
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default Shopping;
