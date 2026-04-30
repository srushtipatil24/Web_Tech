import { useState } from "react";

function CounterHook() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "20px" }}>
      <h2>useState Hook</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CounterHook;