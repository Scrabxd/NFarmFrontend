import { useDispatch } from "react-redux"
import { DashLayout } from "../layout/DashLayout"
import { expandSidebar } from "../../store/slices/sidebar/openSidebarSlice"
import { ModalCow } from "../components/uploadCow/ModalCow"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CowForm, CowsTable } from "../components/uploadCow"
import { Divider } from "@nextui-org/react"
import { LoadCow } from "../components/uploadCow/LoadCow"

export const UploadCowPage = () => {

    const dispatch = useDispatch()

    return (
        
        <DashLayout>

            <div className="flex items-center p-4 justify-between">
                <div className="flex gap-2 items-center">

                    <div className="md:hidden">
                        <FontAwesomeIcon icon={ faBars } className="p-4 cursor-pointer text-lg" onClick={ () => { dispatch( expandSidebar() ) } }/>
                    </div>

                    <p className="text-xl sm:text-3xl font-semibold">Upload a cow</p>
                    
                </div>

                <ModalCow />
            </div>

            <Divider />

            <div className="w-full mt-5 p-4">
                <LoadCow />
            </div>

        </DashLayout>

    )
}
