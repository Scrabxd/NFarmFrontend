import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRanches } from "../../../store/slices/dashRanchSlices/getRanches"
import { NoElementsMessage } from "../messages"
import { CowsList } from "./CowsList"

export const LoadCow = () => {

    const dispatch = useDispatch()
    const { ranches } = useSelector( state => state.ranches ) // reference to store -> reducer -> ranches

    useEffect(() => {
      
        dispatch( getRanches() ) // get all the ranches of the loogged user
    
    }, [] )
    

    // const cows = []
    // console.log({ ranches })
    
    return (
        <>
        {
            ( ranches.length != 0 ) // check if we have any ranches
                ? <CowsList ranches={ ranches } />
                : <NoElementsMessage title="You haven't uploaded any cow"/>
        }
    </> 
    )
}
