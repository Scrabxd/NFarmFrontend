import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRanches } from "../../../store/slices/dashRanchSlices/getRanches"
import { NoElementsMessage } from "../messages/NoElementsMessage"
import { CattleList } from "./CattleList"

export const LoadYourCattle = () => {

    // TODO: Check if the user have cows, if it has show them, if not show the message
    const dispatch = useDispatch()
    const { ranches } = useSelector( state => state.ranches ) // reference to store -> reducer -> ranches

    useEffect(() => {
      
        dispatch( getRanches() ) // get all the ranches of the loogged user
    
    }, [] )

    return (
        <>
            {
                ( ranches.length != 0 )
                    ? <CattleList ranches={ ranches }/> 
                    : <NoElementsMessage title="Your cattle" message="You haven't uploaded any ranch"/>
            }
        </>
    )
}
