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
            <AcmeLogo />
            <Text b color="inherit" hideIn="sm">
                NFarm
            </Text>
        </Navbar.Brand>
    )
}
