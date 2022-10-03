import { Navbar, Link } from "@nextui-org/react"

export const NavbarCollapse = () => {

    
    const collapseItems = [
        "Home",
        "About",
        "Team",
        "Pricing",
        "Sign in",
        "Log in",
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
        </Navbar.Collapse>
    )
}
