import { useDispatch, useSelector } from "react-redux"
import { setSelectedDropdownRanchValue } from "../../../store/slices/dashCattleSlices/ranchesDropdown/ranchDropdownSlice"
import { getCows } from "../../../store/slices/dashCowSlices/getCows/thunks"

export const DropdownRanches = ({ ranches }) => {

    const dispatch = useDispatch()
    const { dropdownValue } = useSelector( state => state.ranchDropdown ) // reference to store -> reducer -> ranchDropdown

    const handleChange = ( event ) => {
        const value = event.target.value // get the value (ranch name) of the option selected
        // console.log( value )
        dispatch( setSelectedDropdownRanchValue({ value }) )

        // get all the cows of the specific ranch
        dispatch( getCows( value ) )
    }
    
    return (

        <div className="relative inline-flex">
            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero"/></svg>

            <select 
                className="rounded-xl text-[#147452] font-semibold h-10 pl-5 pr-10 bg-[#18916654] focus:outline-none appearance-none"
                value={ dropdownValue } 
                onChange={ handleChange }
            >
                <option value=''>Select a ranch</option>
                {
                    ranches.map( ( ranch, index ) => (
                        <option key={ index } value={ ranch.id }>{ ranch.ranchName }</option>
                    ) )
                }
            </select>
            
        </div>

    )
}