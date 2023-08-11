import { AboutUs } from "../components/about/AboutUs"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/header/Header"
import { Price } from "../components/price/Price"
import { Team } from "../components/Team/Team"
import { TeamAcoplados } from "../components/Team/Team_acoplados"

export const LandingPage = () => {
    return (

        <>

            <Header />

            <AboutUs />

            <Price />

            <Team />

            <TeamAcoplados/>

            <Footer />

        </>
        

    )
}
