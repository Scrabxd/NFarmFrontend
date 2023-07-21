import { useSelector } from "react-redux"
import { LoadingSpinner } from "../loading/LoadingSpinner"
import { NoElementsMessage } from "../messages/NoElementsMessage"
import { DropdownRanches } from "../ui/DropdownRanches"
import { CowsTable } from "./CowsTable"
import { ModalCow } from "./ModalCow"
import backgroundImage from '/assets/img/cowBack.jpg';

export const CowsList = ({ ranches }) => {

    const { cows, isLoading } = useSelector( state => state.cows ) // reference to store -> reducer -> cows
    // console.log( cows )

    return (

        <>

            <>
                <div className="w-full flex justify-center items-center relative mb-8">
                    <div className="w-10/12 md:w-4/6 h-[350px] flex flex-col justify-center items-center relative rounded-xl p-1" >
                        <div className="rounded-xl" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${backgroundImage})`, backgroundSize: `cover`, filter: 'brightness(75%) grayscale(35%)', zIndex:'-2'}}>
                        </div>
                        <div className='flex flex-col justify-center items-center p-1' style={{filter: 'none'}}>
                            <p className="text-3xl md:text-6xl font-semibold text-[#F5F5F7] mb-4 text-center" >Upload Cows</p>
                            <DropdownRanches ranches={ ranches } /> 
                            <ModalCow/>
                        </div>
                    </div>
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
