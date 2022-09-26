import { Grid, Text, Spacer } from "@nextui-org/react"
import { FooterLinks } from "./FooterLinks"
import { FooterSubscribe } from "./FooterSubscribe"

export const Footer = () => {
    
    return (
        <Grid.Container css={{ bg:"#147452", mt:"1rem" }} wrap="wrap" gap={3}>
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
        </Grid.Container>
    )
}
