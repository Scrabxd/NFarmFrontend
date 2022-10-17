import { AppRouter } from './router/AppRouter'
import './app.css'

import { AppTheme } from './themes'

export const NFarmApp = () => {
	return (
		<AppTheme>
			<AppRouter />
		</AppTheme>
	)
}

