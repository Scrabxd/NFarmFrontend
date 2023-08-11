import axios from "axios"
import { setImg, startLoadingImageCow } from "./getCowImageSlice"

export const getImageCow = ( idCow ) => {
    
    return async ( dispatch ) => {

        dispatch( startLoadingImageCow() ) //put our isLoading true

        try {
    
            // get the image of the corresponding cow
            const data = await axios.get( 'http://localhost:4000/api/cow?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=', 
                {
                    headers: {
                        'x-token': localStorage.getItem( 'token' ),
                        'idCow': idCow,
                    }
                } 
            )

            // console.log( findCows )
    
            // dispatch( setImg({ file }) )
            console.log( data )
            
        } catch ( error ) {
            console.log( error )
        }


    }


}