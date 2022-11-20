import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { getRestaurants } from "../../../store/slices/dashRestaurantSlices/getRestaurants/thunks"

import { RestaurantsTable } from "./RestaurantsTable"
import { LoadingSpinner } from "../loading/LoadingSpinner"
import { NoElementsMessage } from "../messages/NoElementsMessage"

export const LoadResaurant = () => {

    const dispatch = useDispatch()
	const { restaurants } = useSelector( state => state.restaurants ) // store -> reducer -> restaurants

	useEffect(() => {
	  
		dispatch( getRestaurants() )
	
	}, [  ] )

    console.log({ restaurants })

    return (
        <>

            {
                ( restaurants.length != 0 ) // check if we have any restaurant
                    ? <RestaurantsTable restaurants={ restaurants } />
                    : <NoElementsMessage title="You haven't uploaded any restaurant"/>
            }
            {/* ( isLoading ) ? ( <LoadingSpinner /> ) :  <RestaurantsTable restaurants={ restaurants } /> */}
            {/* <NoElementsMessage title="You haven't uploaded any restaurant"/> */}
        </> 
    )
}
