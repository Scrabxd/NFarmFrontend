import { useDispatch } from "react-redux"

import { DashLayout } from "../layout/DashLayout"
import { expandSidebar } from "../../store/slices/sidebar/openSidebarSlice"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Divider } from "@nextui-org/react"
import { LoadYourCattle } from "../components/cattle/LoadYourCattle"

export const YourCowsPage = () => {

    const dispatch = useDispatch()

    return (
        
        <DashLayout>

            <div className="flex items-center p-4 justify-between">
                <div className="flex gap-2 items-center">

                    <div className="md:hidden">
                        <FontAwesomeIcon icon={ faBars } className="p-4 cursor-pointer text-lg" onClick={ () => { dispatch( expandSidebar() ) } }/>
                    </div>

                    <p className="text-xl sm:text-3xl font-semibold">Your cattle</p>
                    
                </div>

            </div>

            <Divider />

            <div className="w-full mt-5 p-4">
                <LoadYourCattle />
            </div>

        </DashLayout>
        
    )
}
