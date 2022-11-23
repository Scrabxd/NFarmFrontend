import axios from "axios"
import { addRanch } from "../getRanches"
import { setUploadRanchStatus, startLoadingUploadRanch } from "./ranchFormSlice"

export const uploadRanch = ( dataForm ) => {
    
    return async ( dispatch ) => {

        dispatch( startLoadingUploadRanch() )

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
            
            // add the form in our state of getRanches to avoid make a request every uploaded
            const values = dataForm
            dispatch( addRanch({ values }) )
            
        } catch ( error ) {
            
            // get the message error if there is one ( error like, the email is alredy registered )
            // const errorMessage = error.response.data.msg
            // dispatch( setUploadRanchStatus({ errorMessage }) )
            console.log( error )

        }

    }

}