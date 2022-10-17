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
            <NavLink to="/" className="text-inherit">
                Home
            </NavLink>

            <NavLink to="/" className="text-inherit">
                About
            </NavLink>

            <NavLink to="/" className="text-inherit">
                Pricing
            </NavLink>

            <NavLink to="/" className="text-inherit">
                Team
            </NavLink>

            <NavLink to="/questions" className="text-inherit">
                FAQ
            </NavLink>
        </Navbar.Content>
    )
}
