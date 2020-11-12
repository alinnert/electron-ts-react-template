import 'antd/dist/antd.css'
import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import './index.scss'

const isDevelopment = process.env.NODE_ENV !== 'production'

render(
  isDevelopment ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <App />
  ),
  document.getElementById('app')
)
