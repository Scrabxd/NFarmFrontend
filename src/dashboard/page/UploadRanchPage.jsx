import { useDispatch } from "react-redux"
import { DashLayout } from "../layout/DashLayout"
import { ModalRanches } from "../components/uploadRanch/ModalRanches"
import { expandSidebar } from "../../store/slices/sidebar/openSidebarSlice"
import { LoadRanches } from "../components/uploadRanch/LoadRanches"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import backgroundImage from '/assets/img/cowBack.jpg'

export const UploadRanchPage = () => {

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
                <div className="w-full flex justify-center items-center relative mb-8">
                    <div className="w-10/12 md:w-4/6 h-[350px] flex flex-col justify-center items-center relative rounded-xl p-1" >
                        <div className="rounded-xl" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${backgroundImage})`, backgroundSize: `cover`, filter: 'brightness(75%) grayscale(35%)', zIndex:'-2'}}>
                        </div>
                        <div className='flex flex-col justify-center items-center p-1' style={{filter: 'none'}}>
                            <p className="text-3xl md:text-6xl font-semibold text-[#F5F5F7] mb-4 text-center" >Upload Ranch</p>
                            <ModalRanches/>
                        </div>
                    </div>
                </div>
                <LoadRanches />
            </div>

        </DashLayout>

    )
}
