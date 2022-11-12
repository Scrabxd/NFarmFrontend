import { Navbar, Button, Link } from "@nextui-org/react"
import { NavLink } from "react-router-dom"
import { SwitchTheme } from "../../switchTheme/SwitchTheme"

export const NavbarSessionButtons = () => {
    return (
        <>
            <NavLink to="/auth/login" className="text-inherit">
                Login
            </NavLink>

            <Navbar.Item>
                <Button auto flat as={Link} href="/auth/register" color={'success'}> {/**Sign up color */}
                    Sign Up
                </Button>
            </Navbar.Item>
            <Navbar.Item>
                <SwitchTheme />
            </Navbar.Item>
        </>
    )
}
