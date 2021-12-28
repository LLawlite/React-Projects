import React, {useState} from "react";
let time = new Date().toLocaleTimeString();

function App() {

  setInterval(updateTime,1000);
  const now =new Date().toLocaleTimeString();
 now.replace("AM","").replace("PM","");
  const [time,setTime]=useState(now);

  function updateTime()
  {
    const newTime =new Date().toLocaleTimeString();
    newTime.replace("AM","").replace("PM","");
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
