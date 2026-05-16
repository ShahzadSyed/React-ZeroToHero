import { useState } from "react";
import "./App.css";

const data = [
  "Step 1 : Learn React",
  "Step 2 : Earn Online",
  "Step 3 : Invest Wisely",
];

function App() {
  const [step, setStep] = useState(1);

  const prevHandler = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      setStep(3);
    }
  };

  const nextHandler = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(1);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Step Generator</h1>
        <p className="subtitle">
          Simple React step navigation UI
        </p>

        <div className="steps">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`circle ${step >= item ? "active" : ""}`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="content">
          <h2>{data[step - 1]}</h2>
        </div>

        <div className="buttons">
          <button className="btn prev" onClick={prevHandler}>
            Prev
          </button>

          <button className="btn next" onClick={nextHandler}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;