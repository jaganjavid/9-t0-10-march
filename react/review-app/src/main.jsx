import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";

import { FeedbackProvider } from './context/FeedbackContext.jsx';
import{ TextContextProvider } from './context/TextContext.jsx';
import FeedbackContext from './context/FeedbackContext.jsx';
import TextContext from './context/TextContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <FeedbackProvider value={FeedbackContext}> 
  <TextContextProvider value={TextContext}>
    <App />
  </TextContextProvider>
  </FeedbackProvider>
);
