import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Greet from './components/Greet';
import {Greet} from './components/Greet';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <Greet/>
  </React.StrictMode>
);

 
reportWebVitals();
