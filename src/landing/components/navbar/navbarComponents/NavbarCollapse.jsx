import { Navbar, Link } from "@nextui-org/react"
import { SwitchTheme } from "../../switchTheme/SwitchTheme";

export const NavbarCollapse = () => {


    return (
        <Navbar.Collapse >

            <Navbar.CollapseItem>
                <Link color="inherit" css={{ minWidth: "100%" }} href='/'>
                    Home
                </Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
                <Link color="inherit" css={{ minWidth: "100%" }} href='/'>
                    About
                </Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
                <Link color="inherit" css={{ minWidth: "100%" }} href='/'>
                    Pricing
                </Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
                <Link color="inherit" css={{ minWidth: "100%" }} href='/'>
                    Team
                </Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
                <Link color="inherit" css={{ minWidth: "100%" }} href='/questions'>
                    FAQ
                </Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
                <Link color="inherit" css={{ minWidth: "100%" }} href='/auth/login'>
                    Login
                </Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
                <Link color="success" css={{ minWidth: "100%" }} href='/auth/register'>
                    Sign Up
                </Link>
            </Navbar.CollapseItem>

                    <Link>
                        <SwitchTheme />
                    </Link>
        </Navbar.Collapse>
    )
}
