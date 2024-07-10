import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'



const FeedbackLength = () => {

  const { feedback } = useContext(FeedbackContext)

  // console.log(feedback);  
  return (
    <div className='feedback-length'>
        <h3>My Items ({feedback.length})</h3>
    </div>
  )
}

export default FeedbackLength