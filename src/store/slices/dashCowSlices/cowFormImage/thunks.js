import axios from "axios"
import { setUploadImageStatus, startLoadingUploadImage } from "./cowFormImageSlice"

export const uploadImageCow = ( image, idCow ) => {

    return async ( dispatch ) => {

        dispatch( startLoadingUploadImage() ) // put isLoading true

        try {

            // request to get all the logged user's restaurants
            const data = await axios.post( 'http://nfarm-back.herokuapp.com/api/upload?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=',
                image, 
                {
                    headers: {
                        'x-token': localStorage.getItem( 'token' ),
                        'idCow': idCow 
                    }
                } 
            )

            console.log( data )
            // dispatch( setUploadImageStatus({ status }) )

            
        } catch ( error ) {
            
            console.log( error )

        }

    }

}