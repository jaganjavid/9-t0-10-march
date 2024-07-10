import React, { useContext, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackLength from './components/FeedbackLength';
import FeedbackForm from './components/FeedbackForm';
import TextContext from './context/TextContext';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {

  // console.log(uuidv4());
  // console.log(uuidv4());

  const { test, changeTest } = useContext(TextContext);





  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 1"
    },
    {
      id: 2,
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 2"
    },
    {
      id: 3,
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 3"
    }
  ])



  return (

    <Router>
      <Header text="Review app" bgColor="blue" textColor={"#ffffff"} />
        <div className='container'>
          <Routes>
            <Route path="/" element={
              <>
                <FeedbackForm />
                <FeedbackLength />
                <FeedbackList />
              </>
            } />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
    </Router>

  )
}

export default App
