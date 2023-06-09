import axios from "axios"
import { addRestaurant } from "../getRestaurants"
import { setUploadRestaurantBranchStatus, startLoadingUploadBranch } from "./restaurantFormSlice"

export const uploadRestaurantBranch = ( dataForm ) => {
    
    return async ( dispatch ) => {

        dispatch( startLoadingUploadBranch() )

        // make a post request to register a new restaurant branch
        try {

            // get the status of the request, 201 = created
            // const { status } = await restaurantApi( dataForm )
            // const  { status } = await restaurantApi.post( dataForm )
            const { status } = await axios.post( 'http://nfarm-back.herokuapp.com/api/restaurant?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=', 
                dataForm, 
                {
                    headers:{
                        'x-token': localStorage.getItem( 'token' )
                    }
                }
            )

            dispatch( setUploadRestaurantBranchStatus({ status }) )
            // console.log( data )

            // add the form in our state of getRestaurants to avoid make a request every uploaded
            const values = dataForm
            dispatch( addRestaurant({ values }) )
            
        } catch ( error ) {
            
            // get the message error if there is one ( error like, the email is alredy registered )
            // const errorMessage = error.response.data.msg
            // dispatch( setUploadRanchStatus({ errorMessage }) )
            console.log( error )

        }

    }

}