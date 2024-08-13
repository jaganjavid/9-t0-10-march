import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";

import Homescreen from './pages/Homescreen.jsx';
import ProductScreen from './pages/ProductScreen.jsx';

import { Provider } from 'react-redux'
import store from './store.js';



const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<App/>}>
       <Route index={true} path='/' element={<Homescreen/>}/> 
       <Route path='/product/:id' element={<ProductScreen/>}/> 
    </Route>
  )
  
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <RouterProvider router={router}>
       <App />
    </RouterProvider>
  </Provider>
)
