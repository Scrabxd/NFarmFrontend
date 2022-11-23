import { useDispatch, useSelector } from "react-redux"
import { LoadingSpinner } from "../loading/LoadingSpinner"
import { NoElementsMessage } from "../messages/NoElementsMessage"
import { CattleItem } from "./CattleItem"
import { DropdownRanch } from "./DropdownRanch"

export const CattleList = ({ ranches }) => {

    const { cows, isLoading } = useSelector( state => state.cows ) // reference to store -> reducer -> cows

    return (

        <>

            <>
                <div className="w-full mb-4 flex justify-center items-center">
                    <DropdownRanch ranches={ ranches } /> 
                </div>

                {
                    ( isLoading ) && <LoadingSpinner />
                }

                <div className="w-full flex flex-raw flex-wrap justify-center gap-4 items-center">
                    
                    {
                        ( cows.length != 0 )
                            ?
                                ( !isLoading ) && <LoadingSpinner /> &&
                                cows.map( ( cow, index ) => (
                                    <CattleItem key={ index } breed={ cow.breed } name={ cow.name } weight={ cow.weight } />
                                ) )
                                
                            : ( !isLoading ) && <LoadingSpinner /> && <NoElementsMessage title="You don't have any cow on this ranch"/>
                    }

                </div>

            </>


        </>
    )
}
