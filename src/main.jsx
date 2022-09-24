import React from 'react'
import ReactDOM from 'react-dom/client'

import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from './themes/darktheme'

import { LandingApp } from './LandingApp'

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider theme={ darkTheme }>
    <LandingApp />
  </NextUIProvider>
)
