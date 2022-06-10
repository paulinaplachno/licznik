import React, {useState} from "react"
import "./App.css"


const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(prevState => prevState + 1);
  };
  const decrease = () => {
    setCounter(prevState =>prevState - 1);
  };
  const clear = () => {
    setCounter(0);
  };

return (
  <div>
    <h2>Stan licznika: {counter}</h2>
    <br />
    <button onClick={increase} class="glow-on-hover" type="button"> Zwiększ o jeden</button>
    <br />
    <button onClick={clear} class="glow-on-hover" type="button"> Zeruj</button>
    <br />
    <button onClick={decrease} class="glow-on-hover" type="button"> Zmniejsz o jeden </button>
    <br />
  </div>
);
};

export default Counter;