
import { createContext, useState } from "react";

const TextContext = createContext();


export const TextContextProvider = ({ children }) => {

    const [test, setTest] = useState([
          {
            name:"test"
          }
    ]);

    const changeTest = function(){
        // setTest();
    }

    

    return (
      <TextContext.Provider value={{
        test,
        changeTest
      }}>
          { children }
      </TextContext.Provider>
    )

}

export default TextContext;

