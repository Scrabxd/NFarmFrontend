import { useDispatch, useSelector } from "react-redux"
import { NoElementsMessage } from "../messages/NoElementsMessage"
import { CattleItem } from "./CattleItem"
import { DropdownRanch } from "./DropdownRanch"

export const CattleList = ({ ranches }) => {

    const { cows } = useSelector( state => state.cows ) // reference to store -> reducer -> cows

    return (

        <>

            <>
                <div className="w-full mb-4 flex justify-center items-center">
                    <DropdownRanch ranches={ ranches } /> 
                </div>

                <div className="w-full flex flex-raw flex-wrap justify-center gap-4 items-center">
                    
                    {
                        ( cows.length != 0 )
                            ?
                                cows.map( ( cow, index ) => (
                                    <CattleItem key={ index } breed={ cow.breed } name={ cow.name } weight={ cow.weight } />
                                ) )
                                
                            : <NoElementsMessage title="You don't have any cow on this ranch"/>
                    }

                </div>
                {/* <div className="w-full flex flex-raw flex-wrap justify-center gap-4 items-center">
                    {
                        cows.map( ( cow, index ) => (
                            <CattleItem key={ index } breed={ cow.breed } name={ cow.name } weight={ cow.weight } />
                        ) )
                    }
                </div> */}

            </>


        </>
    )
}
