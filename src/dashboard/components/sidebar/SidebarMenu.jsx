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

    const handleRefresh = () => {
        localStorage.clear(); // Clears the Local Storage data
      };

    return (

        <>
            {/* full screen sidebar in movile and sidebar always open in tablet or desketop resolution */}
            <div className={ `h-full ${ isOpenSidebar ? 'w-screen' : 'w-0' } w-screen md:w-56 bg-[#C2C2C4] duration-300 absolute top-0 left-0 z-10 md:relative` }>

                {/* close sidebar when click on the icon */}
                <div className="absolute top-0 -right-0 md:hidden">
                    <FontAwesomeIcon icon={ faXmark } className="px-8 py-4 cursor-pointer text-lg" onClick={ () => { dispatch( closeSidebar() ) } }/>
                </div>

                {/* in movile hide the content if the sidebar is closed, in desktop always show the content */}
                <div className={ `${ isOpenSidebar ? 'block' : 'hidden' } md:block` }>

                    <div className="flex justify-center items-center py-4">
                        <div className="border-2 rounded-full w-16 h-16 bg-purple-600">
                    </div>

                    </div>

                    <div className="w-full text-center mb-2">
                        <p className="text-lg font-semibold text-[#1D1D1F]">{ name + ' ' + lastName }</p>
                        <p className="text-base font-semibold text-[#1D1D1F] mb-4">{ email }</p>
                        <Divider css={{ mt: 6 }} />
                    </div>

                    <div className="text-center md:text-left">
                        {
                            ( idRole === farmerRole )
                                ? <FarmerLinks />
                                : <RestaurantLinks />
                        }
                    </div>


                    <div className="w-full text-center bottom-0 absolute my-2">
                        <Divider css={{ mb: 6 }}/>
                            <a className="text-lg font-semibold text-[#1D1D1F] my-2 flex justify-center" onClick={handleRefresh} href="/#">Log Out 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6">
                                    <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path>
                                </svg>
                            </a>
                        
                    </div>

                </div>

            </div>

            
        </>

    )
}
