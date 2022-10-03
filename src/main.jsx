import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from './themes/darktheme'


import { NFarmApp } from './NFarmApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider theme={ darkTheme }>
    <NFarmApp />
  </NextUIProvider>
)
