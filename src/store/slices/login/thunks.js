import axios from "axios"
import { setLoginErrorMesage, setLoginStatus, startLoadingLogin } from "./loginSlice"

export const loginUser = ( dataForm ) => {
    
    return async ( dispatch ) => {

        dispatch( startLoadingLogin() )

        try {

            // get the status of the reques, 200 = ok, the jwt toke and the user info
            const { status, data: { token, user } } = await axios.post( "http://nfarm-back.herokuapp.com/api/auth/login?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=", dataForm )
            
            // user Data to save in to local storage to keep the session
            const userData = {
                email: user.email,
                name: user.name,
                lastName: user.lastName,
                idRole: user.idRole
            }
            
            console.log( userData )
            localStorage.setItem( 'token', token )
            localStorage.setItem( 'userData', JSON.stringify( userData ) )
            
            dispatch( setLoginStatus({ status }) )
            
        } catch ( error ) {
            
            // get the message error if there is one ( error like, the email is alredy registered )
            const errorMessage = error.response.data.msg

            // console.log( errorMessage )

            dispatch( setLoginErrorMesage({ errorMessage }) )

        }

    }

}