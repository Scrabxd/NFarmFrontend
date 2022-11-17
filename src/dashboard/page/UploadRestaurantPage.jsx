import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Divider } from "@nextui-org/react"
import { useDispatch, useSelector } from "react-redux"
import { expandSidebar } from "../../store/slices/sidebar/openSidebarSlice"
import { NoElementsMessage } from "../components/messages/NoElementsMessage"
import { ModalRestaurant } from "../components/uploadRestaurantBranch/ModalRestaurant"
import { RestaurantsTable } from "../components/uploadRestaurantBranch/RestaurantsTable"
import { DashLayout } from "../layout/DashLayout"

export const UploadRestaurantPage = () => {

    const dispatch = useDispatch()
    const { isOpenSidebar } = useSelector( state => state.openSidebar ) // reference to store -> reducer -> sidebar

    return (
        
        <DashLayout>

            <div className="flex items-center p-4 justify-between">
                <div className="flex gap-2 items-center">

                    <div className="md:hidden">
                        <FontAwesomeIcon icon={ faBars } className="p-4 cursor-pointer text-lg" onClick={ () => { dispatch( expandSidebar() ) } }/>
                    </div>

                    <p className="text-xl sm:text-3xl font-semibold">Upload a restaurant</p>
                    
                </div>

                <ModalRestaurant />
            </div>

            <Divider />


            <div className="w-full mt-5">
                <NoElementsMessage title="You haven't uploaded any restaurant" />
            </div>

            {/* <RestaurantsTable /> */}

        </DashLayout>

    )
}
