import React from "react";
import { observer } from "mobx-react-lite";
import counter from "./store/counter";

const Counter = observer(() => {
  return (
    <div>
      Counter = {counter.count}
      Sum = {counter.total}
      <div style={{ display: "flex" }}>
        <button onClick={() => counter.increment()}>+</button>
        <button onClick={() => counter.decrement()}>-</button>
      </div>
    </div>
  );
});

export default Counter;
