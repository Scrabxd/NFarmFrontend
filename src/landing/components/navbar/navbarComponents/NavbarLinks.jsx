import { Navbar } from "@nextui-org/react"
import { NavLink } from "react-router-dom"

export const NavbarLinks = () => {

    return (
        <Navbar.Content
        //   enableCursorHighlight
        activeColor="success"
        hideIn="md"
        variant="underline-rounded"
        >
            <NavLink to="/" className="text-inherit">
                Home
            </NavLink>

            <a href="/#about" className="text-inherit">
                About
            </a>

            <a href="/#pricing" className="text-inherit">
                Pricing
            </a>

            <a href="/#team" className="text-inherit">
                Team
            </a>

            <NavLink to="/questions" className="text-inherit">
                FAQ
            </NavLink>
        </Navbar.Content>
    )
}
