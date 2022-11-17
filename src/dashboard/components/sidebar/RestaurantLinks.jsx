import { NavLink } from "react-router-dom"

export const RestaurantLinks = () => {
    return (
        <ul>
            <li>
                <NavLink
                    className="text-inherit font-semibold text-base sm:text-lg" 
                    to="/dash/upload-restaurant"
                >
                    Upload a restaurant
                </NavLink>
            </li>

            <li>
                <NavLink
                    className="text-inherit font-semibold text-base sm:text-lg" 
                    to="/dash/cattle"
                >
                    Your Cattle
                </NavLink>
            </li>
        </ul>
    )
}
