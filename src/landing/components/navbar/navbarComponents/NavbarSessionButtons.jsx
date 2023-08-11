import { Navbar } from "@nextui-org/react"
import { NavLink } from "react-router-dom"
import { SwitchTheme } from "../../switchTheme/SwitchTheme"

export const NavbarSessionButtons = () => {
    return (
        <>
            <NavLink to="/auth/login" className="text-inherit">
                Login
            </NavLink>

            <NavLink to="/auth/register" className="text-white font-bold p-3 bg-[#005100] rounded-xl hover:bg-[#286400]">
                SignUp
            </NavLink>

            {/* <Navbar.Item>
                <SwitchTheme className="hidden"/>
            </Navbar.Item> */}
        </>
    )
}
