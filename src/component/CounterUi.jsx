import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";
function CounterUi() {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch()
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-semibold mb-4">Counter App</h1>

        <div className="flex items-center justify-center space-x-4">
          <button
            id="decrementBtn"
            className="bg-red-500 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            onClick={()=>dispatch(decrement())}>
            Decrement
          </button>

          <span id="counter" className="text-2xl font-bold">
            {count}
          </span>

          <button
            id="incrementBtn"
            className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            onClick={()=>dispatch(increment())}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterUi;
