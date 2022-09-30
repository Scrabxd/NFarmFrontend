import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from './themes/darktheme'


import { App } from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider theme={ darkTheme }>
    <App />
  </NextUIProvider>
)
