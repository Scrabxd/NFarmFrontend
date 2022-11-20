import { useDispatch } from "react-redux"

import { DashLayout } from "../layout/DashLayout"
import { expandSidebar } from "../../store/slices/sidebar/openSidebarSlice"
import { LoadResaurant } from "../components/uploadRestaurantBranch"
import { ModalRestaurant } from "../components/uploadRestaurantBranch/ModalRestaurant"

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Divider } from "@nextui-org/react"

export const UploadRestaurantPage = () => {

    const dispatch = useDispatch()

    return (
        
        <DashLayout title="Upload a Restaurant">

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

            <div className="w-full mt-5 p-4">
                <LoadResaurant />
            </div>

        </DashLayout>

    )
}
