import { AboutUs } from "../components/about/AboutUs"
import { FAQ } from "../components/faq/FAQ"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/header/Header"
import { NavbarMenu } from "../components/navbar/NavbarMenu"
import { Price } from "../components/price/Price"
import { Team } from "../components/Team/Team"

export const LandingPage = () => {
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
