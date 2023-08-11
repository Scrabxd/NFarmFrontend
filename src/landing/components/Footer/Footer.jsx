import { Grid, Text, Spacer } from "@nextui-org/react"
import { FooterLinks } from "./FooterLinks"
import { FooterSubscribe } from "./FooterSubscribe"

export const Footer = () => {
    
    return (
        <>
        
            <footer className="flex flex-col w-full sm:flex-row justify-around mt-10 sm:mt-20 bg-[#147452] text-white">

                <div className="flex flex-col justify-center items-center sm:mb-10 mt-4">
                    <img src="/assets/img/logos/nfarm-logoCircle.png" alt="NFarmLogo" className="w-auto h-16 mb-2"/>
                    <p className="text-2xl font-bold">NFarm</p>
                    <p className="text-base">You, Your Cattle & The System</p>
                    <p className="text-xs">© NFarm. All rights reserved.</p>
                    <FooterSubscribe />
                </div>

                <div className="flex flex-col justify-center items-center mt-4 mb-4">
                    <p className="text-xl">Useful Links</p>
                    <FooterLinks title={"Home"}/>
                    <FooterLinks title={"About us"}/>
                    <FooterLinks title={"Features"}/>
                    <FooterLinks title={"Our Team"}/>
                </div> 

            </footer>
            
        </>
    )
}
