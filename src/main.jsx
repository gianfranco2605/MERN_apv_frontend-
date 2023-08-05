import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Strict mode rendirizza il componente 2 volte
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
