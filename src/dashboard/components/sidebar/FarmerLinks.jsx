import { NavLink } from "react-router-dom"

export const FarmerLinks = () => {
    return (
        <ul>
            <li>
                <NavLink
                    className="text-inherit font-semibold text-lg sm:text-xl" 
                    to="/dash/upload-cow"
                >
                    🐄 Upload a cow
                </NavLink>
            </li>

            <li>
                <NavLink
                    className="text-inherit font-semibold text-lg sm:text-xl" 
                    to="/dash/cattle"
                >
                    🐮 Your Cattle
                </NavLink>
            </li>

            <li>
                <NavLink
                    className="text-inherit font-semibold text-lg" 
                    to="/dash/upload-ranch"
                >
                    👨‍🌾 Upload a Ranch
                </NavLink>
            </li>
        </ul>
    )
}
