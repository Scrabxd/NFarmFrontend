import { NavLink } from "react-router-dom"

export const FarmerLinks = () => {
    return (
        <ul>
            <li>
                <NavLink
                    className="text-inherit font-semibold text-base sm:text-lg hover:bg-[#F5F5F7] p-2 rounded-lg duration-150" 
                    to="/dash/upload-cow"
                >
                    Upload Cows
                </NavLink>
            </li>

            <li>
                <NavLink
                    className="text-inherit font-semibold text-base sm:text-lg hover:bg-[#F5F5F7] p-2 rounded-lg duration-150" 
                    to="/dash/cattle"
                >
                    Your Cattle
                </NavLink>
            </li>

            <li>
                <NavLink
                    className="text-inherit font-semibold text-base sm:text-lg hover:bg-[#F5F5F7] p-2 rounded-lg duration-150" 
                    to="/dash/upload-ranch"
                >
                    Upload Ranch
                </NavLink>
            </li>
        </ul>
    )
}
