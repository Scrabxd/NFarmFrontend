import { useDispatch } from "react-redux"
import { DashLayout } from "../layout/DashLayout"
import { expandSidebar } from "../../store/slices/sidebar/openSidebarSlice"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CowForm, CowsTable } from "../components/uploadCow"
import { Divider } from "@nextui-org/react"
import { LoadCow } from "../components/uploadCow/LoadCow"
import { Load } from "../components/uploadCow/Load"

export const UploadCowPage = () => {

    const dispatch = useDispatch()

    return (
        
        <DashLayout>

            <div className="flex items-center px-4 justify-end">
                
                <Load/>

                <div className="flex gap-2 items-center">

                    <div className="md:hidden">
                        <FontAwesomeIcon icon={ faBars } className="p-4 cursor-pointer text-lg" onClick={ () => { dispatch( expandSidebar() ) } }/>
                    </div>
                    
                </div>
            </div>

            <div className="w-full px-8 md:pt-8">
                <LoadCow />
            </div>

        </DashLayout>

    )
}
