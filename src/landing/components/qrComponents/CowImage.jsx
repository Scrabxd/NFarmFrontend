import { Card  } from "@nextui-org/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getImageCow } from "../../../store/slices/dashCowSlices/getCowImage/thunks"
import { getSingleCow } from "../../../store/slices/dashCowSlices/getSingelCow/thunks"
import { CowTable } from "./cowTable"

export const CowImage = () => {

    //get the url parameters
    const { cowId } = useParams()

    const dispatch = useDispatch()
    const { img } = useSelector( state => state.imageCow ) // reference to store -> reducer ->imageCow
    const { cow } = useSelector( state => state.cow ) // reference to store -> reducer -> cow

    useEffect(() => {
        
        dispatch( getImageCow( cowId ) )
        dispatch( getSingleCow( cowId ) )
    
    }, [ ])
    

    return (

        <>
            <Card css={{ border: "none" }}>
                <Card.Body>

                    <div className="w-full flex justify-center items-center mb-5">
                        <p className="text-lg md:text-2xl">{ cow.name }</p>
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <img src={ img } className="rounded-xl w-96"/>
                    </div>



                </Card.Body>
            </Card>

            <CowTable { ...cow }/>
            
        </>
    )
}
