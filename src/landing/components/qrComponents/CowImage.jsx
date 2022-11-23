import { Card, Loading } from "@nextui-org/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleCow } from "../../../store/slices/dashCowSlices/getSingelCow/thunks"
import { CowTable } from "./cowTable"

export const CowImage = () => {

    //get the url parameters
    const { cowId } = useParams()

    const dispatch = useDispatch()
    const { isLoading, cow } = useSelector( state => state.cow ) // reference to store -> reducer -> cow

    useEffect(() => {
        
        dispatch( getSingleCow( cowId ) )
    
    }, [ ])
    



    return (

        <>
            <Card css={{ border: "none" }}>
                <Card.Body>

                    <div className="w-full flex justify-center items-center mb-5">
                        <p className="text-lg md:text-2xl">{ cow.name }</p>
                    </div>

                    <img src="/assets/img/cow.jfif" className="w-full rounded-xl"/>


                </Card.Body>
            </Card>

            <CowTable { ...cow }/>
            
        </>
    )
}
