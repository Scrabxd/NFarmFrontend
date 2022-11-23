import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCows } from "../../../store/slices/dashCowSlices/getCows/thunks"
import { NoElementsMessage } from "../messages"
import { CowsTable } from "./CowsTable"

export const LoadCow = () => {

    // const dispatch = useDispatch()
    // const { cows } = useSelector( state => state.cows ) // reference to store -> reducer -> cows

    // useEffect(() => {
    
    //     dispatch( getCows() )
    
    // }, [  ])
    

    const cows = []
    // console.log({ cows })
    
    return (
        <>
        {
            ( cows.length != 0 ) // check if we have any ranches
                ? <CowsTable cows={ cows } />
                : <NoElementsMessage title="You haven't uploaded any cow"/>
        }
    </> 
    )
}
