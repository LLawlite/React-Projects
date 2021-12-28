import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevValues) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValues.lName,
          email: prevValues.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValues.fName,
          lName: value,
          email: prevValues.email
        };
      } else if (name === "email") {
        return {
          fName: prevValues.fName,
          lName: prevValues.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          value={contact.fName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={contact.lName}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
        />
        <input
          value={contact.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
