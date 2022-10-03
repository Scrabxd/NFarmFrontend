import { Navbar } from "@nextui-org/react"

export const NavbarLinks = () => {

    return (
        <Navbar.Content
        //   enableCursorHighlight
        activeColor="success"
        hideIn="xs"
        variant="underline-rounded"
        >
            <Navbar.Link href="#">Home</Navbar.Link>
            <Navbar.Link href="#about">
                About
            </Navbar.Link>
            <Navbar.Link href="#team">Team</Navbar.Link>
            <Navbar.Link href="#pricing">Pricing</Navbar.Link>
        </Navbar.Content>
    )
}
