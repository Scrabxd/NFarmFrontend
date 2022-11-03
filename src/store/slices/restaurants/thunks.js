import axios from "axios"
import { setRestaurants, startLoadingRestaurants } from "./getRestaurantsSlice"

export const getRestaurants = () => {

    return async ( dispatch ) => {

        dispatch( startLoadingRestaurants() ) // put isLoading true

        try {

            // request to get all the logged user's restaurants
            const { data: { findRestaurant } } = await axios.get( 'http://nfarm-back.herokuapp.com/api/restaurant?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=', 
                {
                    headers: {
                        'x-token': localStorage.getItem( 'token' )
                    }
                } 
            )

            // console.log( findRestaurant )
            dispatch( setRestaurants({ findRestaurant }) )

            
        } catch ( error ) {
            
            console.log( error )

        }

    }

}