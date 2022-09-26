import { NavbarMenu } from './components/navbar/NavbarMenu'
import { Header } from './components/header/Header'
import { AboutUs } from './components/about/AboutUs'
import { Price } from './components/price/Price'
import './app.css'
import { Team } from './components/Team/Team'
import { FAQ } from './components/faq/FAQ'
import { Footer } from './components/Footer/Footer'

export const App = () => {
	return (
		<>
			<NavbarMenu />

			<Header />

			<AboutUs />

			<Price />

			<Team />

			<FAQ />

			<Footer />
		</>
	)
}

