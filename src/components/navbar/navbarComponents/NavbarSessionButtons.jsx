import { Navbar, Button, Link } from "@nextui-org/react"

export const NavbarSessionButtons = () => {
    return (
        <>
            <Navbar.Link color="inherit" href="#">
                Login
            </Navbar.Link>
            <Navbar.Item>
                <Button auto flat as={Link} href="#" color={"success"}> {/**Sign up color */}
                    Sign Up
                </Button>
            </Navbar.Item>
        </>
    )
}
