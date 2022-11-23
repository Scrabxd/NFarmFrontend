import axios from "axios"
import { setCows, startLoadingCows } from "./getCowsSlice"

export const getCows = ( idRanch ) => {
    
    return async ( dispatch ) => {

        dispatch( startLoadingCows() ) //put our isLoading true

        try {
    
            // request to get all the logged user's ranches
            // { data: { findCows } }
            const { data: { findCows } } = await axios.get( 'http://nfarm-back.herokuapp.com/api/cow?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=', 
                {
                    headers: {
                        'x-token': localStorage.getItem( 'token' ),
                        'idRanch': idRanch
                    }
                } 
            )

            // console.log( findCows )
    
            dispatch( setCows({ findCows }) ) // return to our slice, the ranch array and this also set our isLoading in false
            // console.log( data )
            
        } catch ( error ) {
            console.log( error )
        }


    }


}