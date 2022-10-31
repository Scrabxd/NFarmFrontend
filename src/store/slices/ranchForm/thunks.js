import { data } from "autoprefixer"
import axios from "axios"
import { setUploadRanchStatus } from "./ranchFormSlice"

export const uploadRanch = ( dataForm ) => {
    
    return async ( dispatch ) => {

        // make a post request to register a new user
        try {

            // get the status of the request, 201 = created
            const { status } = await axios.post( 'http://nfarm-back.herokuapp.com/api/ranch?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=', 
                dataForm, 
                {
                    headers:{
                        'x-token': localStorage.getItem( 'token' )
                    }
                }
            )

            dispatch( setUploadRanchStatus({ status }) )
            // console.log( status )
            
        } catch ( error ) {
            
            // get the message error if there is one ( error like, the email is alredy registered )
            const errorMessage = error.response.data.msg
            // dispatch( setUploadRanchStatus({ errorMessage }) )
            console.log( error )

        }

    }

}