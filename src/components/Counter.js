import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";
import { useState } from "react";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const [payload, setPayload] = useState(0);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const IncrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const IncreaseByPayload = () => {
    dispatch(counterActions.increment(payload))
  }
  
  const DecrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const DecreaseByPayload= () => {
    dispatch(counterActions.decrement(payload))
  }

  const resetHandler = () => {
    dispatch(counterActions.reset())
    setPayload(0)
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      {showCounter && <div>
          <p>set Payload</p>
          <button onClick={() => setPayload(prevState => prevState + 1)}>+</button>
          {payload}
          <button onClick={() => setPayload(prevState => prevState - 1)}>-</button>
        </div>}
        {showCounter && <div>
          <button onClick={IncrementHandler}>Increment</button>
          <button onClick={IncreaseByPayload}>Increase by Payload</button>
          <button onClick={resetHandler}>Reset</button>
          <button onClick={DecrementHandler}>Decrement</button>
          <button onClick={DecreaseByPayload}>Decrease by Payload</button>
        </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
