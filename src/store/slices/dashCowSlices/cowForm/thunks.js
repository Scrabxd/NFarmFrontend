import axios from "axios"
import { setLastCow, setUploadCowStatus, startLoadingUploadCow } from "./cowFormSlice"

export const uploadCow = ( dataForm, idRanch ) => {

    return async ( dispatch ) => {

        dispatch( startLoadingUploadCow() )

        // make a post request to register a new user
        try {
 
            // get the status of the request, 201 = created
            const { status, data: { createCow: { id } } } = await axios.post( 'http://nfarm-back.herokuapp.com/api/cow?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=', 
                dataForm, 
                {
                    headers:{
                        'x-token': localStorage.getItem( 'token' ),
                        'idRanch': idRanch
                    }
                }
            )

            dispatch( setUploadCowStatus({ status }) )
            console.log( status, id )
            dispatch( setLastCow({ id }) )
            
        } catch ( error ) {
            
            // get the message error if there is one ( error like, the email is alredy registered )
            // const errorMessage = error.response.data.msg
            // dispatch( setUploadRanchStatus({ errorMessage }) )
            console.log( error )

        }
    }

}