import { useDispatch, useSelector } from "react-redux"
import { expand } from "../../../store/slices/sidebar/openSidebarSlice"

import { NavLink } from "react-router-dom"

import { UserDropDown } from "./UserDropDown"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export const SidebarMenu = () => {

    const dispatch = useDispatch()
    const { isOpen } = useSelector( state => state.openSidebar ) // reference to store -> reducer -> sidebar

    // get the logged user data con convert it to a json
    const { name, lastName, email } = JSON.parse( localStorage.getItem( 'userData' ) )

    return (


        <>
            <motion.div className="fixed m-4 cursor-pointer z-10" onClick={ () => { dispatch( expand() ) } } whileHover={{ scale: 1.2 }}>
                <FontAwesomeIcon icon={ faBars } className="p-2"/>
            </motion.div>

            <div className={ `h-screen ${ isOpen ? 'w-screen sm:w-52' : 'w-0' } bg-[#1b1b1b] flex flex-col justify-around items-center duration-300` }>

                {
                    isOpen
                        ?
                        <>
                            <ul>
                                <li>
                                    <p>{ `Welcome ${ name } ${ lastName } ! - ${ email }` }</p>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <NavLink
                                        className="text-inherit font-semibold text-lg sm:text-xl" 
                                        to="/dash/upload-cow"
                                    >
                                        🐄 Upload a cow
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        className="text-inherit font-semibold text-lg sm:text-xl" 
                                        to="/dash/cattle"
                                    >
                                        🐮 Your Cattle
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        className="text-inherit font-semibold text-lg sm:text-xl" 
                                        to="/dash/upload-ranch"
                                    >
                                        👨‍🌾 Upload a Ranch
                                    </NavLink>
                                </li>
                            </ul>

                            {/* <UserDropDown /> */}

                            <p>NFarm</p>

                        </>
                        : <></>
                }

            </div>

            
        </>

    )
}
