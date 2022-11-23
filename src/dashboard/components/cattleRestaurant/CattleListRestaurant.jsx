import { useSelector } from "react-redux"
import { LoadingSpinner } from "../loading/LoadingSpinner"
import { NoElementsMessage } from "../messages/NoElementsMessage"
import { CattleItem } from "../ui/CattleItem"
import { DropdownRestaurants } from "../ui/DropdownRestaurants"

export const CattleListRestaurant = ({ restaurants }) => {

    const { cows, isLoading } = useSelector( state => state.cows ) // reference to store -> reducer -> cows
    // console.log( cows )

    return (

        <>

            <>
                <div className="w-full mb-4 flex justify-center items-center">
                    <DropdownRestaurants restaurants={ restaurants } /> 
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
                                    <CattleItem key={ index } { ...cow } /> //send to the component all the info of cows
                                ) )
                                
                            : ( !isLoading ) && <LoadingSpinner /> && <NoElementsMessage title="You don't have any cow on this ranch"/>
                    }

                </div>

            </>


        </>
    )
}