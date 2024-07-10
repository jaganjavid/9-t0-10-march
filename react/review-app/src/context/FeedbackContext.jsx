
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {

   

    const [feedback, setFeedback] = useState([
          // {
          //   id:1,
          //   text:"from context 1"
          // },
          // {
          //   id:2,
          //   text:"from context 2"
          // },
          // {
          //   id:3,
          //   text:"from context 3"
          // }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    });

    const fetchFeedback = async () => {

      const response = await fetch("http://localhost:3000/feedback");

      const data = await response.json();

      setFeedback(data);

    }

    useEffect(() => {

      fetchFeedback();

    }, [])



    const addFeedback = async (newFeedback) => {
      // newFeedback.id = uuidv4();

      const response = await fetch("http://localhost:3000/feedback", {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(newFeedback)
      });
      

      const data = await response.json();

      setFeedback([...feedback, data]);
    
  
    }

    const deleteFeedback = async (id) => {
      if(window.confirm("Are you sure?")){

        await fetch(`http://localhost:3000/feedback/${id}`, {
          method:"DELETE"
        }) 
       
        setFeedback(feedback.filter((item) => item.id !== id));
      }
      
    }

    const updateFeedback = (id, updItem) => {
      setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item));
    }

    const editFeedback = (item) => {
      setFeedbackEdit({
        item:item,
        edit:true
      })
    }
    
    

    return (
      <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        editFeedback
      }}>
          { children }
      </FeedbackContext.Provider>
    )

}

export default FeedbackContext;

