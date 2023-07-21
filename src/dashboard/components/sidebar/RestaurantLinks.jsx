import { NavLink } from "react-router-dom"

export const RestaurantLinks = () => {
    return (
        <ul className="flex flex-col gap-2">
            <li>
                <NavLink
                    className="text-inherit font-semibold text-base sm:text-lg hover:bg-[#F5F5F7] p-2 rounded-lg duration-150" 
                    to="/dash/upload-restaurant"
                >
                    Upload Restaurant
                </NavLink>
            </li>

            <li>
                <NavLink
                    className="text-inherit font-semibold text-base sm:text-lg hover:bg-[#F5F5F7] p-2 rounded-lg duration-150" 
                    to="/dash/cattle-restaurant"
                >
                    Your Cattle
                </NavLink>
            </li>
        </ul>
    )
}
