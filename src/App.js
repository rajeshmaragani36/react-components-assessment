import React, { useState } from "react";
import StudentCard from "./Components/StudentCard";
import Counter from "./Components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>
        React Components, Props & State Assessment
      </h1>

      <StudentCard
        name="M Rajesh"
        course="CSE"
        city="Guntur"
      />

      <Counter
        count={count}
        increase={increaseCount}
        decrease={decreaseCount}
      />
    </div>
  );
}

export default App;
