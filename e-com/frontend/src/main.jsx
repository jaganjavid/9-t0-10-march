import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";

import Homescreen from './pages/Homescreen.jsx';
import ProductScreen from './pages/ProductScreen.jsx';




const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<App/>}>
       <Route index={true} path='/' element={<Homescreen/>}/> 
       <Route path='/product/:id' element={<ProductScreen/>}/> 
    </Route>
  )
  
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
