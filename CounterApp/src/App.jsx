import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function IncreaseCount() {
    setCount(count + 1);
  }

  function DecreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function ResetCount() {
    setCount(0);
  }

  return (
    <section id="center">
      <div className="card">
        <h1>The Real Count App</h1>
        <h3>Built with React</h3>

        <div className="count-box">
          <p>Your Count</p>
          <span>{count}</span>
        </div>

        <div className="btn-group">
          <button
            className="counter increase"
            onClick={IncreaseCount}
          >
            + Increment
          </button>

          <button
            className="counter decrease"
            onClick={DecreaseCount}
          >
            - Decrement
          </button>

          <button
            className="counter reset"
            onClick={ResetCount}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;