import './App.css';
import {useState} from "react"; // useState is a react Hook , a react trick that helps track data / properties in between function calls.we see the return value from useState

function App() {
  const [time, setTime] = useState(0); // time is current state 2nd value is the function to update our state, the 0 is the initial state 


  return (
    <><h1>Stopwatch</h1> 
    <div>
      <span>{("0" + Math.floor((time/60000) % 60))}: </span> 
      <span>{("0" + Math.floor((time/1000) % 60))}: </span>
      <span>{("0" + ((time/10) % 100))}: </span>  
    </div>
    <div>
      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>
    </div>
    </>
  
  );
}

export default App;
