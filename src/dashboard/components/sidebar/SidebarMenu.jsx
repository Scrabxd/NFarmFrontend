import { useDispatch, useSelector } from "react-redux"
import { expand } from "../../../store/slices/sidebar/openSidebarSlice"

import { UserDropDown } from "./UserDropDown"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FarmerLinks } from "./FarmerLinks"
import { RestaurantLinks } from "./RestaurantLinks"

export const SidebarMenu = () => {

    const dispatch = useDispatch()
    const { isOpen } = useSelector( state => state.openSidebar ) // reference to store -> reducer -> sidebar

    // get the idRole user to show the corresponding sidebar
    const { idRole } = JSON.parse( localStorage.getItem( 'userData' ) )
    const farmerRole = 1

    return (


        <>
            <div className="fixed m-4 cursor-pointer z-10" onClick={ () => { dispatch( expand() ) } }>
                <FontAwesomeIcon icon={ faBars } className="p-2"/>
            </div>

            <div className={ `h-screen ${ isOpen ? 'w-screen sm:w-52' : 'w-0' } bg-[#1b1b1b] flex flex-col justify-between items-center duration-300` }>

                {
                    isOpen
                        ?
                        <>
                            <ul>
                                <li>
                                    <img src="../public/assets/img/logos/nfarm-logoCircle.png" className="w-16"/>
                                </li>
                            </ul>

                            {
                                ( idRole === farmerRole )
                                    ? <FarmerLinks />
                                    : <RestaurantLinks />
                            }

                            {/* <UserDropDown /> */}
                            <p>USER</p>

                        </>
                        : <></>
                }

            </div>

            
        </>

    )
}
