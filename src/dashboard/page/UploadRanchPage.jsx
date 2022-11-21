import { useDispatch } from "react-redux"
import { DashLayout } from "../layout/DashLayout"
import { ModalRanches } from "../components/uploadRanch/ModalRanches"
import { expandSidebar } from "../../store/slices/sidebar/openSidebarSlice"
import { LoadRanches } from "../components/uploadRanch/LoadRanches"
import { Divider } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export const UploadRanchPage = () => {

    const dispatch = useDispatch()

    return (
        
        <DashLayout title="Upload a Ranch">

            <div className="flex items-center p-4 justify-between">
                <div className="flex gap-2 items-center">

                    <div className="md:hidden">
                        <FontAwesomeIcon icon={ faBars } className="p-4 cursor-pointer text-lg" onClick={ () => { dispatch( expandSidebar() ) } }/>
                    </div>

                    <p className="text-xl sm:text-3xl font-semibold">Upload a ranch</p>
                    
                </div>

                <ModalRanches />
            </div>

            <Divider />

            <div className="w-full mt-5 p-4">
                <LoadRanches />
            </div>

        </DashLayout>

    )
}
