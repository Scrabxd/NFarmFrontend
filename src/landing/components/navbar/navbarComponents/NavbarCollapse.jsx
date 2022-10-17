import { Navbar, Link } from "@nextui-org/react"
import { SwitchTheme } from "../../switchTheme/SwitchTheme";

export const NavbarCollapse = () => {

    
    const collapseItems = [
        "Home",
        "About",
        "Pricing",
        "Team",
        "Log in",
        "Sign in",
    ];

    return (
        <Navbar.Collapse >
            {collapseItems.map((item, index) => (
                <Navbar.CollapseItem
                    key={item}
                    activeColor="success"
                    css={{
                        color: index === collapseItems.length - 1 ? "$success" : "",
                    }}
                    // isActive={index === 2 }
                >
                    <Link
                        color="inherit"
                        css={{
                        minWidth: "100%",
                        }}
                        href="#"
                    >
                        {item}
                    </Link>
                </Navbar.CollapseItem>
            ))}

                    <Link>
                        <SwitchTheme />
                    </Link>
        </Navbar.Collapse>
    )
}
