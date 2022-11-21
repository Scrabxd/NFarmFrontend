import { NavLink } from "react-router-dom"

export const FarmerLinks = () => {
    return (
        <ul>
            <li>
                <NavLink
                    className="text-inherit font-semibold text-base sm:text-lg hover:bg-[#323232] p-2 rounded-lg duration-150" 
                    to="/dash/upload-cow"
                >
                    Upload a cow
                </NavLink>
            </li>

            <li>
                <NavLink
                    className="text-inherit font-semibold text-base sm:text-lg hover:bg-[#323232] p-2 rounded-lg duration-150 w-full" 
                    to="/dash/cattle"
                >
                    Your Cattle
                </NavLink>
            </li>

            <li>
                <NavLink
                    className="text-inherit font-semibold text-base sm:text-lg hover:bg-[#323232] p-2 rounded-lg duration-150" 
                    to="/dash/upload-ranch"
                >
                    Upload a Ranch
                </NavLink>
            </li>
        </ul>
    )
}
