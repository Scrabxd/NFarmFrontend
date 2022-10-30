import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { motion } from "framer-motion"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { UserDropDown } from "./UserDropDown"
import { Link, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { expand } from "../../../store/slices/sidebar/openSidebarSlice"

export const SidebarMenu = () => {

    const dispatch = useDispatch()
    const { isOpen } = useSelector( state => state.openSidebar ) // reference to store -> reducer -> sidebar

    // const [isOpen, setOpen ] = useState( false )

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
                                    <p>NFarm</p>
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
