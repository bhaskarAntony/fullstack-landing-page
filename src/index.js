import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
/* In your main CSS file, e.g., App.css or a dedicated styles file */
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import { PopupProvider } from './context/PopupContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <PopupProvider>
   <App />
   </PopupProvider>
  </React.StrictMode>
);

reportWebVitals();
