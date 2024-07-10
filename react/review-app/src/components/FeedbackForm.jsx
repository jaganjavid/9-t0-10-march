import { useContext, useState, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import FeedbackContext from "../context/FeedbackContext";




const FeedbackForm = () => {

  const { addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);


  

  const [text, setText] = useState("");  
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");


  useEffect(() => {
   if(feedbackEdit.edit === true){
   
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);

   } else{
     console.log("Add");
   }
 }, [feedbackEdit]);

  const handleTextChange = (e) => {

    if(text === ""){
        setBtnDisabled(true);
        setMessage("");
    } else if(text !== "" && text.trim().length <= 10){
       setMessage("Text must be 10 charc");
       setBtnDisabled(true);
    } else{
        setMessage(null);
        setBtnDisabled(false);
    }

    setText(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    
    if(text.trim().length > 10){

       const newFeedback = {
          text:text
       }

       if(feedbackEdit.edit === true){
           updateFeedback(feedbackEdit.item.id, newFeedback);
           setBtnDisabled(true);
           setText("");
       }else{
           addFeedback(newFeedback);
       }

      

    }
    

  }

  return (
    <Card>
       <form onSubmit={handleSubmit}>
          <h2>Add your FeedBack</h2>

           <div className="input-group">
            <input onChange={handleTextChange} type="text" placeholder="Write a feedback" value={text}/>
            <p className="message">{message && message}</p>
            <Button type="submit" isDisabled={btnDisabled} version={"primary"}>
                Submit
            </Button>
            
           </div>
       </form>  
    </Card>
  )
}

export default FeedbackForm