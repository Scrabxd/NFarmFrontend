import axios from "axios"
import { setLastCow, setUploadCowStatus, startLoadingUploadCow } from "./cowFormSlice"

export const uploadCow = ( dataForm, idRanch ) => {

    return async ( dispatch ) => {

        dispatch( startLoadingUploadCow() )

        // make a post request to register a new user
        try {
            console.log(dataForm)
            // get the status of the request, 201 = created
            const { status, data: { createCow: { id } } } = await axios.post( 'http://localhost:4000/api/cow', 
                dataForm, 
                {
                    headers:{
                        'Content-Type': 'multipart/form-data',
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