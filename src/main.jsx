import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from './store'

import { BrowserRouter } from 'react-router-dom'

import './main.css'

import { NFarmApp } from './NFarmApp'


ReactDOM.createRoot(document.getElementById('root')).render(

		<React.StrictMode>
			<Provider store={ store }>
				<BrowserRouter>
						<NFarmApp />
				</BrowserRouter>
			</Provider>
		</React.StrictMode>
)
