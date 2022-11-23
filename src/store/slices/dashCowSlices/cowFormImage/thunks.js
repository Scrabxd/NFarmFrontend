import axios from "axios"
import { setUploadImageStatus, startLoadingUploadImage } from "./cowFormImageSlice"

export const uploadImageCow = ( { file }, idCow ) => {

    return async ( dispatch ) => {

        dispatch( startLoadingUploadImage() ) // put isLoading true

        try {

            console.log(file)
            console.log( idCow )

            // request to get the image of a cow
            const data = await axios.post( 'http://nfarm-back.herokuapp.com/api/upload?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=',
                file , 
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