import { Outlet } from "react-router-dom";
import Header from "./component/Header"
// import Homescreen from "./pages/Homescreen";




function App() {
 

  return (
    <>
      <Header/>

      <div className="container mx-auto">
        <Outlet/>
      </div>
    </>
  )
}

export default App
