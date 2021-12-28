import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function list(x) {
    return <li>{x}</li>;
  }
  function handleChange(event) {
    const value = event.target.value;
    setItem(value);
  }
  function handleClick() {
    console.log(item);
    setItems((previousItem) => {
      return [...previousItem, item]; //spread operator
    });
    setItem(""); //to clear the input after inserting
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={item} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{items.map(list)}</ul>
      </div>
    </div>
  );
}

export default App;
