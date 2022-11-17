import { faBars, faXmark, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Divider } from "@nextui-org/react"
import { useDispatch, useSelector } from "react-redux"
import { expandSidebar } from "../../store/slices/sidebar/openSidebarSlice"
import { SidebarMenu } from "../components/sidebar/SidebarMenu"

export const DashLayout = ({ children }) => {

    const { isOpenSidebar } = useSelector( state => state.openSidebar ) // reference to store -> reducer -> sidebar


    const dispatch = useDispatch()

    return (

        <div className="flex">

            <div>

                <SidebarMenu />

            </div>

            <div className="w-full h-screen">
                { children }
            </div>


        </div>

        // <div className="box-border w-full h-screen">

        //     <div className="p-4">
        //         {
        //             ( !isOpenSidebar )
        //                 ? <FontAwesomeIcon icon={ faBars } className="p-2 cursor-pointer text-lg" onClick={ () => { dispatch( expandSidebar() ) } }/>
        //                 : <FontAwesomeIcon icon={ faXmark } className="p-2 cursor-pointer text-lg" onClick={ () => { dispatch( expandSidebar() ) } }/>

        //         }
        //     </div>

        //     <div className="flex">

        //         <div className="box-border h-5/6">
        //             <SidebarMenu />
        //         </div>

        //         <div className="w-full overflow-auto">
        //             { children }
        //         </div>

        //     </div>

        // </div>

        // <div className="w-screen flex">

        //     <div>

        //         <SidebarMenu />

        //     </div>

        //     <div className="h-screen w-full overflow-auto">

        //         <div className="flex flex-col justify-center items-center">

        //         <p className="text-3xl text-center sm:text-5xl font-bold mb-4 mt-4">Your restaurants</p>

        //         <Divider />

        //             <div className="w-11/12 pt-5">
                
        //                 { children }

        //             </div>

        //         </div>

        //     </div>
            


        // </div>

    )
}
