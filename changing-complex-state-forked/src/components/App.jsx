import React, { useState } from "react";

function App() {
  const [fullName,setFullName]=useState({
    fName:"",
    lName: ""
  })


  function handleChange(event)
  {
    var newValue=event.target.value;
    var eventName=event.target.name;
    // const {name,value}=event.target;
    setFullName((prevValues)=>{
      if(eventName==="fName")
      {
        return {
          fName:newValue,
          lName:prevValues.lName
        }
      }
      else if(eventName==="lName")
      {
        return {
          fName:prevValues.fName,
          lName:newValue
        }
      }
    })
    if(eventName==="fName")
    {

    }
  }
  return (
    <div className="container">
      <h1>Hello {fullName.fName+" "+fullName.lName}</h1>
      <form>
        <input value={fullName.fName}
        onChange={handleChange}
        name="fName" placeholder="First Name" />
        <input value={fullName.lName}
        onChange={handleChange}
        name="lName" placeholder="Last Name" />
        <button >Submit</button>
      </form>
    </div>
  );
}

export default App;
