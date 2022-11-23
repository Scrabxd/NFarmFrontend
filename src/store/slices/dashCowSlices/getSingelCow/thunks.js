import axios from "axios"
import { setCow, startLoadingCow } from "./getSingleCowSlice"

export const getSingleCow = ( cowIdReal ) => {
    
    return async ( dispatch ) => {

        dispatch( startLoadingCow() ) //put our isLoading true

        try {
    
            // { data: { findCows } }
            const { data: { findCow } } = await axios.get( 'http://nfarm-back.herokuapp.com/api/cow/single?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=', 
                {
                    headers: {
                        'realIdCow': cowIdReal
                    }
                } 
            )

    
            dispatch( setCow({ findCow }) ) // return to our slice, the ranch array and this also set our isLoading in false
            console.log( findCow )
            console.log('heyyy')
            
        } catch ( error ) {
            console.log( error )
        }


    }


}