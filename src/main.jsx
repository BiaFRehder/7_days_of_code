import React from 'react'
import ReactDOM from 'react-dom/client'

import { connect } from "./utils/firebase"
import { Pages } from "./pages"

import "./assets/styles/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pages app={connect()} />
  </React.StrictMode>
)
