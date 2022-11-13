import { Navbar } from "@nextui-org/react"
import { NavLink } from "react-router-dom"
import { SwitchTheme } from "../../switchTheme/SwitchTheme"

export const NavbarSessionButtons = () => {
    return (
        <>
            <NavLink to="/auth/login" className="text-inherit">
                Login
            </NavLink>

            <NavLink to="/auth/register" className="text-white font-bold p-3 bg-[#147452] rounded-xl">
                SignUp
            </NavLink>

            <Navbar.Item>
                <SwitchTheme />
            </Navbar.Item>
        </>
    )
}
