import { Grid, Text, Spacer } from "@nextui-org/react"
import { FooterLinks } from "./FooterLinks"
import { FooterSubscribe } from "./FooterSubscribe"

export const Footer = () => {
    
    return (
        <>
        
            <footer className="flex flex-col w-full sm:flex-row justify-around mt-10 sm:mt-20 bg-[#147452]">

                <div className="flex flex-col justify-center items-center sm:mb-10">
                    <div className="footer-line mt-5"></div>
                    <p className="text-2xl font-bold">NFarm</p>
                    <p>You, Your Cattle & The System</p>
                    <FooterSubscribe />
                </div>

                <div className="flex flex-col justify-center items-center mt-8 mb-8">
                    <p className="text-xl">Useful Links</p>
                    <FooterLinks title={"Home"}/>
                    <FooterLinks title={"About us"}/>
                    <FooterLinks title={"Features"}/>
                    <FooterLinks title={"Our Team"}/>
                </div> 

            </footer>

            {/* <Grid.Container css={{ bg:"#147452", mt:"1rem" }} wrap="wrap" gap={3}>
                <Grid xs={12} sm={8} direction="column" alignItems="center">
                    <div className="footer-line"></div> 
                    <Text weight={"bold"} h3>NFarm</Text>
                    <Text i>You, Your Cattle & The System</Text>

                    <Spacer y={2}/>
                    <FooterSubscribe />
                    
                </Grid>
                <Grid xs={12} sm={4} direction="column" alignItems="center" css={{ '@md':{alignItems:"flex-start" }}}> 
                    <Text h4>Useful Links</Text>
                    <FooterLinks title={"Home"}/>
                    <FooterLinks title={"About us"}/>
                    <FooterLinks title={"Features"}/>
                    <FooterLinks title={"Our Team"}/>
                </Grid>
            </Grid.Container> */}
        </>
    )
}
