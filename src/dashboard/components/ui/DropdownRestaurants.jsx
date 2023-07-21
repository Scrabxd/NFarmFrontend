import { useDispatch, useSelector } from "react-redux"
import { setSelectedDropdownRanchValue } from "../../../store/slices/dashCattleSlices/ranchesDropdown/ranchDropdownSlice"
import { getCows } from "../../../store/slices/dashCowSlices/getCows/thunks"

export const DropdownRestaurants = ({ restaurants }) => {

    const dispatch = useDispatch()
    const { dropdownValue } = useSelector( state => state.ranchDropdown ) // reference to store -> reducer -> ranchDropdown

    const handleChange = ( event ) => {
        const value = event.target.value // get the value (ranch name) of the option selected
        // console.log( value )
        dispatch( setSelectedDropdownRanchValue({ value }) )

        // get all the cows of the specific restaurant
        // dispatch( getCows( value ) )
    }
    
    return (

        <div className="relative inline-flex">
            <svg className="w-6 h-6 absolute top-0 right-0 my-2 mr-3 pointer-events-none" viewBox="0 0 24 24" fill="#none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 8.79289C6.68342 8.40237 7.31658 8.40237 7.70711 8.79289L12 13.0858L16.2929 8.79289C16.6834 8.40237 17.3166 8.40237 17.7071 8.79289C18.0976 9.18342 18.0976 9.81658 17.7071 10.2071L12.7071 15.2071C12.3166 15.5976 11.6834 15.5976 11.2929 15.2071L6.29289 10.2071C5.90237 9.81658 5.90237 9.18342 6.29289 8.79289Z" fill="#F5F5F7"/>
            </svg>

            <select 
                className="rounded-xl text-[#F5F5F7] font-semibold h-10 pl-5 pr-10 bg-[#7CB93E99] focus:outline-none appearance-none"
                value={ dropdownValue } 
                onChange={ handleChange }
            >
                <option value=''>Select Branch</option>
                {
                    restaurants.map( ( restaurant, index ) => (
                        <option key={ index } value={ restaurant.id }>{ restaurant.branchName }</option>
                    ) )
                }
            </select>
            
        </div>

    )
}