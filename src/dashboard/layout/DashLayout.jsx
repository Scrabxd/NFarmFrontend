import { expandSidebar } from "../../store/slices/sidebar/openSidebarSlice"
import { SidebarMenu } from "../components/sidebar/SidebarMenu"

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Divider } from "@nextui-org/react"

export const DashLayout = ({ children }) => {



    return (

        <div className="flex">

            <div>

                <SidebarMenu />

            </div>

            <div className="w-full h-screen overflow-auto">
                { children }
            </div>


        </div>

    )
}
