import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Controller from './controller'
import { BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Controller />
  </React.StrictMode>,
)
