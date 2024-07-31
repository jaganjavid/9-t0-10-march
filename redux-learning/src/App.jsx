
import './App.css'
import {useDispatch, useSelector } from 'react-redux'

import Counter from './features/counter/Counter'
import { updateTest } from "./features/test/testSlice";


function App() {
  

  const test = useSelector((state) => state.test.value);

  const dispatch = useDispatch();


  const changeTestValue = () => {

    const newValue = "Jagan Javid";

    dispatch(updateTest(newValue));

  }
  

  return (
    <>

    <h1>Value : {test}</h1>
    <button onClick={changeTestValue}>Click</button>
      <Counter/>
    </>
  )
}

export default App
