

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from './counterSlice';



const Counter = () => {

  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}

export default Counter