import axios from "axios"
import { setLoginStatus } from "./loginSlice"

export const registerUser = ( dataForm ) => {
    
    return async ( dispatch ) => {

        // make post request to  login
        // const data = await axios.post( 'http://nfarm-back.herokuapp.com/api/nfarm?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=', {
        //     headers: {
        //         idRole: '1'
        //     },
        //     data: dataForm,
        // })

        // console.log( data )

        // dispatch( setLoginStatus( status ) )

    }

}