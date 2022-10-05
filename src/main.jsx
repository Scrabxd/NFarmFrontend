import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import './main.css'

import { NFarmApp } from './NFarmApp'

import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from './themes/darktheme'


ReactDOM.createRoot(document.getElementById('root')).render(

	<React.StrictMode>
		<BrowserRouter>

			<NextUIProvider theme={ darkTheme }>
				<NFarmApp />
			</NextUIProvider>

		</BrowserRouter>
  	</React.StrictMode>
)
