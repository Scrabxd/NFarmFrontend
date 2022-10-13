import { AppRouter } from './router/AppRouter'
import './app.css'

import { NextUIProvider } from '@nextui-org/react'
import { darkTheme, lightTheme } from './themes/themes'

export const NFarmApp = () => {
	return (
		<NextUIProvider theme={ darkTheme }>
			<AppRouter />
		</NextUIProvider>
	)
}

