import axios from "axios"
import { setRegisterErrorMesage, setRegisterStatus, startLoadingSignup } from "./signupSlice"

export const registerUser = ( dataForm ) => {
    
    return async ( dispatch ) => {

        dispatch( startLoadingSignup() )

        // make a post request to register a new user
        try {

            // get the status of the reques, 200 = ok
            const { status } = await axios.post( "http://nfarm-back.herokuapp.com/api/nfarm?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=", dataForm )
            dispatch( setRegisterStatus({ status }) )
            // console.log( status )
            
        } catch ( error ) {
            
            // get the message error if there is one ( error like, the email is alredy registered )
            const errorMessage = error.response.data.msg
            dispatch( setRegisterErrorMesage({ errorMessage }) )
            // console.log( error )

        }


    }

}