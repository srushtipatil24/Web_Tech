import { useState, useEffect } from "react";

function EffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or count changed");

    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ margin: "20px" }}>
      <h2>useEffect Hook</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default EffectExample;