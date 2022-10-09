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
            <NavLink to="/">
                Home
            </NavLink>

            <NavLink to="/">
                About
            </NavLink>

            <NavLink to="/">
                Pricing
            </NavLink>

            <NavLink to="/">
                Team
            </NavLink>

            <NavLink to="/questions">
                FAQ
            </NavLink>
        </Navbar.Content>
    )
}
