import { Navbar, Text } from "@nextui-org/react"
import { AcmeLogo } from "./AcmeLogo"

export const NavbarBrand = () => {

    return (
        <Navbar.Brand
        css={{
            "@xs": {
            w: "12%",
            },
        }}
        >
          
            {/* <Text b color="inherit" hideIn="sm">
                NFarm
            </Text> */}
            <img src="assets/img/logos/nfarm-logoCircle.png" className="w-14"/>  
        </Navbar.Brand>
    )
}
