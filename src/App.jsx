import { AboutUs } from './components/about/AboutUs'
import { Header } from './components/header/Header'
import { NavbarMenu } from './components/navbar/NavbarMenu'

export const App = () => {
	return (
		<>
			<NavbarMenu />

			<Header />

			<AboutUs />
		</>
	)
}

