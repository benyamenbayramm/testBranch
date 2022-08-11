import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./reducers/counterSlice";
// import { decrement, increment, updateByValue } from "./action/actions";

export default function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onClickIncrement = () => {
    // increment(dispatch);
    dispatch(increment());
  };
  const onClickDecrement = () => {
    dispatch(decrement());
  };
  const onClickUpdateByValue = (vl) => {
    dispatch(updateByValue(vl));
  };
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={onClickIncrement}>+</button>
      <button onClick={onClickDecrement}>-</button>
      <button onClick={() => onClickUpdateByValue(5)}>5</button>
    </div>
  );
}
