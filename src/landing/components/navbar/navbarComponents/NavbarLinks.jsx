import { Navbar } from "@nextui-org/react"
import { NavLink } from "react-router-dom"

export const NavbarLinks = () => {

    return (
        <Navbar.Content
        //   enableCursorHighlight
        activeColor="success"
        hideIn="sm"
        variant="underline-rounded"
        >
            <Navbar.Link href="#">Home</Navbar.Link>
            <Navbar.Link href="#about">
                About
            </Navbar.Link>
            <Navbar.Link href="#team">Team</Navbar.Link>
            <Navbar.Link href="#pricing">Pricing</Navbar.Link>

            <NavLink to="/">
                Pricingg
            </NavLink>

            <NavLink to="/questions">
                FAQ
            </NavLink>
        </Navbar.Content>
    )
}
