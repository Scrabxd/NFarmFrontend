import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRestaurants } from "../../../store/slices/dashRestaurantSlices/getRestaurants"
import { NoElementsMessage } from "../messages/NoElementsMessage"
import { CattleListRestaurant } from "./CattleListRestaurant"

export const LoadYourCattleRestaurant = () => {

    // TODO: Check if the user have cows, if it has show them, if not show the message
    const dispatch = useDispatch()
    const { restaurants } = useSelector( state => state.restaurants ) // reference to store -> reducer -> ranches

    useEffect(() => {
      
        dispatch( getRestaurants() ) // get all the ranches of the loogged user
    
    }, [] )

    return (
        <>
            {
                ( restaurants.length != 0 )
                    ? <CattleListRestaurant restaurants={ restaurants }/> 
                    : <NoElementsMessage title="You haven't uploaded any ranch"/>
            }
        </>
    )
}