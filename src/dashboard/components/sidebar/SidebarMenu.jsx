import { useDispatch, useSelector } from "react-redux"
import { closeSidebar } from "../../../store/slices/sidebar/openSidebarSlice"

import { FarmerLinks } from "./FarmerLinks"
import { RestaurantLinks } from "./RestaurantLinks"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { Divider } from "@nextui-org/react"

export const SidebarMenu = () => {

    const dispatch = useDispatch()
    const { isOpenSidebar } = useSelector( state => state.openSidebar ) // reference to store -> reducer -> sidebar

    // get the user's data to show the corresponding sidebar
    const { idRole, name, lastName, email } = JSON.parse( localStorage.getItem( 'userData' ) )
    const farmerRole = 1

    return (

        <>
            {/* full screen sidebar in movile and sidebar always open in tablet or desketop resolution */}
            <div className={ `h-full ${ isOpenSidebar ? 'w-screen' : 'w-0' } w-screen md:w-56 bg-[#1b1b1b] duration-300 absolute top-0 left-0 z-10 md:relative` }>

                {/* close sidebar when click on the icon */}
                <div className="absolute top-0 -right-0 md:hidden">
                    <FontAwesomeIcon icon={ faXmark } className="p-4 cursor-pointer text-lg" onClick={ () => { dispatch( closeSidebar() ) } }/>
                </div>

                {/* in movile hide the content if the sidebar is closed, in desktop always show the content */}
                <div className={ `${ isOpenSidebar ? 'block' : 'hidden' } md:block` }>

                    <div className="flex justify-center items-center py-4">
                        <div className="border-2 rounded-full w-16 h-16 bg-purple-600">
                    </div>

                    </div>

                    <div className="w-full text-center mb-2">
                        <p>{ name + ' ' + lastName }</p>
                        <small >{ email }</small>
                        <Divider css={{ mt: 6 }} />
                    </div>

                    <div className="text-center md:text-left">
                        {
                            ( idRole === farmerRole )
                                ? <FarmerLinks />
                                : <RestaurantLinks />
                        }
                    </div>


                    <div className="w-full text-center bottom-0 absolute">
                        <Divider css={{ mt: 6 }} />
                        <p className="p-2">Log out</p>
                    </div>

                </div>

            </div>

            
        </>

    )
}
