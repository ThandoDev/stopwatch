import './App.css';
import {useEffect, useState} from "react"; // useState is a react Hook , a react trick that helps track data / properties in between function calls.we see the return value from useState

function App() {
  const [time, setTime] = useState(0); // time is current state 2nd value is the function to update our state, the 0 is the initial state 
  const [running, setRunning] = useState(false);

useEffect(() => {
  let interval;
  if (running) {
    interval = setInterval(() => {
      setTime((prevTime)  => prevTime + 10);
    }, 10);
  } else if (!running) {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
},[running]);

  return (
    <><h1>STOPWATCH</h1> 
    <div class="time-display">
      <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}: </span> 
      <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)}: </span>
      <span>{("0" + ((time/10) % 100)).slice(-2)}: </span>  
    </div>
    <div class="button-display" >
      <button onClick={()=>{setRunning(true)}}>Start</button>
      <button onClick={()=>{setRunning(false)}}>Stop</button>
      <button onClick={()=> {setTime(0)}} >Reset</button>
    </div>
    </>
  
  );
}

export default App;
