import { useSelector } from "react-redux"
import { LoadingSpinner } from "../loading/LoadingSpinner"
import { NoElementsMessage } from "../messages/NoElementsMessage"
import { DropdownRanches } from "../ui/DropdownRanches"
import { CowsTable } from "./CowsTable"

export const CowsList = ({ ranches }) => {

    const { cows, isLoading } = useSelector( state => state.cows ) // reference to store -> reducer -> cows
    // console.log( cows )

    return (

        <>

            <>
                <div className="w-full mb-4 flex justify-center items-center">
                    <DropdownRanches ranches={ ranches } /> 
                </div>

                {
                    ( isLoading ) && <LoadingSpinner />
                }

                    
                {
                    ( cows.length != 0 )
                        ?
                            ( !isLoading ) && <LoadingSpinner /> &&
                            <CowsTable cows={ cows } /> //send to the component all the info of cows
                            
                        : ( !isLoading ) && <LoadingSpinner /> && <NoElementsMessage title="You don't have any cow on this ranch"/>
                }


            </>


        </>
    )
}
