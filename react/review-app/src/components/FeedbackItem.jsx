import { useContext } from "react";
import Card from "./shared/Card"
import { FaTimes,FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";




const FeedbackItem = ({item}) => {

  // const [text, setText] = useState("This is my text");

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);


  return (
    <Card cardColor="true">
       <div className='text-display'>
        {item.text}
       </div>
       <button className="close" onClick={() => deleteFeedback(item.id)}>
           <FaTimes color="red"/>
       </button>
       <button className="edit" onClick={() => editFeedback(item)}>
         <FaEdit/>
       </button>
    </Card>
  )
}

export default FeedbackItem