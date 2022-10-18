import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { motion } from "framer-motion"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Divider } from "@nextui-org/react"

export const SidebarMenu = () => {

    const [isOpen, setOpen ] = useState( true )

    return (

        <>
            <motion.div className="fixed m-4 cursor-pointer flex flex-row" onClick={ () => setOpen( !isOpen ) } whileHover={{ scale: 1.2 }}>
                <FontAwesomeIcon icon={ faBars } className="p-2"/>
            </motion.div>

            <div className={ `h-screen ${ isOpen ? 'w-52' : 'w-0' } float-left bg-[#1b1b1b] flex flex-col justify-around items-center duration-300 z-20` }>

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
                                    <p>NFarm</p>
                                </li>

                                <li>
                                    <p className="font-semibold text-lg sm:text-xl">🐮 Your Cattle</p>
                                </li>

                                <li>
                                    <p>NFarm</p>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <p>NFarm</p>
                                </li>
                            </ul>
                        </>
                        : <></>
                }

            </div>

            
        </>

    )
}
