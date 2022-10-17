import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import './main.css'

import { NFarmApp } from './NFarmApp'


ReactDOM.createRoot(document.getElementById('root')).render(

		<React.StrictMode>
			<BrowserRouter>

					<NFarmApp />

			</BrowserRouter>
		</React.StrictMode>
)
