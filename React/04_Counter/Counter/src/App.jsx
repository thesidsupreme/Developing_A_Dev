import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCount] = useState(15);

  const addValue = () => {
    setCount(counter + 1);
  };
  const removeValue = () => {
    setCount(counter - 1);
  };

  return (
    <>
      <div className="container">
        <h1>This is Counter</h1>
        <h2>Counter Value: {counter}</h2>

        <button onClick={addValue}>Add Value {counter}</button>
        <button onClick={removeValue}>Remove Value {counter}</button>
      </div>
    </>
  );
}

export default App;
