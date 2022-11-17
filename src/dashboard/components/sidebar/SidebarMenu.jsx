import { useSelector } from "react-redux"

import { UserDropDown } from "./UserDropDown"

import { FarmerLinks } from "./FarmerLinks"
import { RestaurantLinks } from "./RestaurantLinks"
import { Divider } from "@nextui-org/react"

export const SidebarMenu = () => {

    const { isOpenSidebar } = useSelector( state => state.openSidebar ) // reference to store -> reducer -> sidebar

    // get the idRole user to show the corresponding sidebar
    const { idRole } = JSON.parse( localStorage.getItem( 'userData' ) )
    const farmerRole = 1

    return (


        <>
            <div className={ `h-full ${ isOpenSidebar ? 'w-screen sm:w-52' : 'w-0' } bg-[#1b1b1b] rounded-tr-3xl flex flex-col justify-between items-center duration-300 relative` }>
                {
                    isOpenSidebar
                        ?
                        <>
                            <div className="border-2 rounded-full absolute -top-6 w-16 h-16 bg-purple-600">
                                {/* <img src="../public/assets/img/logos/nfarm-logoCircle.png" className="w-16"/> */}
                            </div>

                            <div className="w-full mt-16 text-center mb-2">
                                <p>Jose Bayona</p>
                                <small>jose123@email.com</small>
                                <Divider css={{ mt: 6 }} />
                            </div>


                            {
                                ( idRole === farmerRole )
                                    ? <FarmerLinks />
                                    : <RestaurantLinks />
                            }


                            <div className="w-full text-center">
                                <Divider css={{ mt: 6 }} />
                                <p>Log out</p>
                            </div>

                        </>
                        : <></>
                }
            </div>
            
        </>

    )
}
