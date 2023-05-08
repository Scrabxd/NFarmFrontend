import axios from "axios"
import { setRanches, startLoadingRanches } from "./getRanchesSlice"

export const getRanches = () => {

    return async( dispatch ) => {

        dispatch( startLoadingRanches() ) //put our isLoading true

        try {
    
            // request to get all the logged user's ranches
            const { data: { ranch } } = await axios.get( 'http://localhost:4000/api/ranch?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=', 
                {
                    headers: {
                        'x-token': localStorage.getItem( 'token' )
                    }
                } 
            )
    
            dispatch( setRanches({ ranch }) ) // return to our slice, the ranch array and this also set our isLoading in false
            
        } catch ( error ) {
            console.log( error )
        }


    }

}