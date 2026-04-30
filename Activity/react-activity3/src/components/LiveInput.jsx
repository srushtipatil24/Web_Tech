import { useState } from "react";

function LiveInput() {
  const [text, setText] = useState("");

  return (
    <div style={{ margin: "20px" }}>
      <h2>Live Input Example</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <p>You typed: {text}</p>
      <p>Character count: {text.length}</p>
    </div>
  );
}

export default LiveInput;