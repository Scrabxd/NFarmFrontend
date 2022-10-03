import { NavbarSessionButtons } from "./NavbarSessionButtons"
import { NavbarUserDropdown } from "./NavbarUserDropdown"

export const NavbarSession = ({ isLog = false }) => {

    return (

        ( isLog )
            ? <NavbarUserDropdown />
            : <NavbarSessionButtons />
            
    )
}
