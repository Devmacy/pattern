import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Provider from "./Provider.jsx";
import Theme from "./Theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<Provider/>*/}
      <Theme/>
  </React.StrictMode>,
)
