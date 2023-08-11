import { Card  } from "@nextui-org/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
// import { getImageCow } from "../../../store/slices/dashCowSlices/getCowImage/thunks"
import { getSingleCow } from "../../../store/slices/dashCowSlices/getSingelCow/thunks"
import { CowTable } from "./cowTable"

export const CowImage = () => {

    //get the url parameters
    const { cowId } = useParams()

    const dispatch = useDispatch()
    // const { img } = useSelector( state => state.imageCow ) // reference to store -> reducer ->imageCow
    const { cow } = useSelector( state => state.cow ) // reference to store -> reducer -> cow
    
    
    useEffect(() => {
        
        dispatch( getSingleCow( cowId ) )
        
    }, [ ])
    
    // console.log(cow)

    // const deleteAfterComma = (str) => {
    //     const index = str.indexOf(',');
    //     return index !== -1 ? str.substring(0, index) : str;
    //   };

    return (

        <>
            <Card css={{ border: "none" }}>
                <Card.Body>

                    <div className="w-full flex justify-center items-center mb-5">
                        <p className="text-lg md:text-2xl font-bold"> {cow.name} </p>
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <img src={cow.images} className="rounded-xl w-80" alt={cow.name}/>
                    </div>



                </Card.Body>
            </Card>

            <CowTable { ...cow }/>
            
        </>
    )
}