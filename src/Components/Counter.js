import React from "react";

function Counter({ count, increase, decrease }) {
  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={increase}>
        Increase
      </button>

      <button
        onClick={decrease}
        style={{ marginLeft: "10px" }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;