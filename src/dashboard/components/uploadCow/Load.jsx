import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRanches } from "../../../store/slices/dashRanchSlices/getRanches"
import { ModalCow } from "./ModalCow"

export const Load = () => {

    const dispatch = useDispatch()
    const { ranches } = useSelector( state => state.ranches ) // reference to store -> reducer -> ranches

    useEffect(() => {
      
        dispatch( getRanches() ) // get all the ranches of the loogged user
    
    }, [] )
    
    return (
        <>
        {
            ( ranches.length != 0 ) // check if we have any ranches
                ? <span></span>
                : <ModalCow/>
        }
    </> 
    )
}