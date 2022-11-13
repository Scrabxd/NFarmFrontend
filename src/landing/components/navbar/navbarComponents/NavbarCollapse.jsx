import { Navbar, Link } from "@nextui-org/react"
import { NavLink } from "react-router-dom";
import { SwitchTheme } from "../../switchTheme/SwitchTheme";

export const NavbarCollapse = () => {


    return (
        <Navbar.Collapse >

            <Navbar.CollapseItem>
                <NavLink className="text-inherit" to="/">
                    Home
                </NavLink>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
                <NavLink className="text-inherit" to="/">
                    About
                </NavLink>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
                <NavLink className="text-inherit" to="/">
                    Pricing
                </NavLink>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
                <NavLink className="text-inherit" to="/">
                    Team
                </NavLink>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
                <NavLink className="text-inherit" to="/questions">
                    FAQ
                </NavLink>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
                <NavLink className="text-inherit" to="/auth/login">
                    Login
                </NavLink>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
                <NavLink className='text-[#147452] font-bold' to="/auth/register">
                    Sign Up
                </NavLink>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
                <SwitchTheme />
            </Navbar.CollapseItem>

        </Navbar.Collapse>
    )
}
