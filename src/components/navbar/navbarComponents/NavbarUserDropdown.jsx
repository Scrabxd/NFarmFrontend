import { Navbar, Dropdown, Avatar } from "@nextui-org/react"
import { NavbarUserDropdownItems } from "./NavbarUserDropdownItems"

export const NavbarUserDropdown = () => {
    return (
        <Dropdown placement="bottom-right">
            <Navbar.Item>
            <Dropdown.Trigger>
                <Avatar
                bordered
                as="button"
                color="secondary"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
            </Dropdown.Trigger>
            </Navbar.Item>

            <NavbarUserDropdownItems />
            
        </Dropdown>
    )
}
