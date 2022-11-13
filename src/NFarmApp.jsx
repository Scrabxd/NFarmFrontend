import { AppRouter } from './router/AppRouter'
import './App.css'

import { AppTheme } from './themes'

export const NFarmApp = () => {
	return (
		<AppTheme>
			<AppRouter />
		</AppTheme>
	)
}

