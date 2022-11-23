import axios from "axios"
import { setCows, startLoadingCows } from "./getCowsSlice"

export const getCows = () => {
    
    return async ( dispatch, idRanch ) => {

        dispatch( startLoadingCows() ) //put our isLoading true

        try {
    
            // request to get all the logged user's ranches
            // { data: { ranch } }
            const { data: { findCows } } = await axios.get( 'http://nfarm-back.herokuapp.com/api/cow?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=', 
                {
                    headers: {
                        'x-token': localStorage.getItem( 'token' )
                    }
                } 
            )

            // console.log( findCows )
    
            dispatch( setCows({ findCows }) ) // return to our slice, the ranch array and this also set our isLoading in false
            
        } catch ( error ) {
            console.log( error )
        }


    }


}