import { useEffect, useState } from "react";
import "./App.css";
import { counterStore } from "./reduxStore";

function App() {
  const [count, setCount] = useState(counterStore.getState().counter);

  function incrementby2() {
    counterStore.dispatch({ type: "incrementby2" });
  }

  function decrementby2() {
    counterStore.dispatch({ type: "decrementby2" });
  }

  useEffect(() => {
    const sub = counterStore.subscribe(() => {
      setCount(counterStore.getState().counter);
    });

    return () => sub();
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={incrementby2}>+2</button>
        <button onClick={decrementby2}>-2</button>
      </div>
    </>
  );
}

export default App;
