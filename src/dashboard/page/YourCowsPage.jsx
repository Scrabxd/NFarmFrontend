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

            <div className="flex items-center px-4 justify-end">
                <div className="flex gap-2 items-center">

                    <div className="md:hidden">
                        <FontAwesomeIcon icon={ faBars } className="p-4 cursor-pointer text-lg" onClick={ () => { dispatch( expandSidebar() ) } }/>
                    </div>
                    
                </div>

            </div>

            <div className="w-full px-8 md:pt-8">
                <LoadYourCattle />
            </div>

        </DashLayout>
        
    )
}
