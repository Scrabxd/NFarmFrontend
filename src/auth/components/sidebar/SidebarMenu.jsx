import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faN, faCircleArrowLeft, faUser, faCow, faXmark } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"

export const SidebarMenu = () => {

    const [ open, setOpen ] = useState( false )

    return (

        <>
            <div className={ `flex p-4 lg:hidden ${ open ? 'hidden' : '' }` }>

                <div className="bg-red-400 rounded-lg">
                    <FontAwesomeIcon icon={faBars} className="p-2" onClick={ () => setOpen( !open ) } />
                </div>

            </div>

            <div className="flex h-screen items-center float-left m-2">

                <motion.div className={ `flex flex-col items-center justify-between rounded-lg border-2 h-full w-20 h-5/6` } whileHover={{ width:"18rem" }}>

                    <div>
                        <p className="text-xl font-semibold">N</p>
                    </div>

                    <ul>
                        <li className="flex items-center gap-x-4">
                            <FontAwesomeIcon icon={ faCow } />
                        </li>
                        <li className="flex items-center gap-x-4">
                            <FontAwesomeIcon icon={ faCow } />
                        </li>
                        <li className="flex items-center gap-x-4">
                            <FontAwesomeIcon icon={ faCow } />
                        </li>
                    </ul>

                    <div className="flex justify-center items-center w-10 h-10 border-2 rounded-full mb-4">
                        <FontAwesomeIcon icon={ faUser } className=""/>
                   </div>

                </motion.div>

            </div>
{/* 
            <div className="flex h-screen items-center">

                <motion.div className={ `flex flex-col items-center justify-between rounded-lg border-2 h-full ${ open ? 'w-full' : 'hidden'} lg:flex`} whileHover={{ width:'18rem' }} >

                    <ul className="relative">
                        <li className="w-full rounded-md flex justify-center p-2 gap-x-4">
                            <span className="text-xl font-semibold">NFarm</span>    
                        </li>
                        <FontAwesomeIcon icon={faXmark} className={ `absolute -right-28 top-4 ${ !open ? 'hidden' : '' }` } size="1x" 
                            onClick={ () => setOpen( !open ) } 
                        />
                    </ul>
                    
                    <div className="flex items-center justify-center">
                        <ul>
                            <li className="flex items-center gap-x-4">
                                <FontAwesomeIcon icon={ faCow } />
                                <span className={ `font-semibold text-xl ${ !open && 'hidden' }` }>Dashboard</span>
                            </li>
                            <li className="flex items-center gap-x-4">
                                <FontAwesomeIcon icon={ faCow } />
                                <span className={ `font-semibold text-xl ${ !open && 'hidden' }` }>Home</span>
                            </li>
                            <li className="flex items-center gap-x-4">
                                <FontAwesomeIcon icon={ faCow } />
                                <span className={ `font-semibold text-xl ${ !open && 'hidden' }` }>Settings</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-center items-center w-10 h-10 border-2 rounded-full mb-4">
                        <FontAwesomeIcon icon={ faUser } className=""/>
                   </div>

                </motion.div>

            </div> */}
        </>


        // <div className="flex h-screen items-center float-left">
        
        //     <div className={ `${ open ? "w-72" : "w-15" } duration-300 rounded-lg h-5/6 ml-5 border-2 flex flex-col items-center justify-between` }>

        //         <ul className="mt-5">
        //             <li className="w-full rounded-md flex items-center p-2 gap-x-4">
        //                 <div className="flex justify-center items-center w-10 h-10 border-2 rounded-full duration-100 hover:bg-[#115F43]">
        //                     <FontAwesomeIcon icon={ faN }/>
        //                 </div>
        //                 <span className={ `font-semibold text-xl ${ !open && 'hidden' }` }>NFarm</span>
        //                 <FontAwesomeIcon icon={ faCircleArrowLeft } onClick={ () => setOpen( !open ) } className={ `${ !open && 'rotate-180' } duration-300` }/>
        //             </li>
        //         </ul>
                

        //         <ul>
        //             <li className="w-full rounded-md flex items-center p-2 gap-x-4">
        //                 <div className="flex justify-center items-center w-10 h-10 border-2 rounded-full duration-100 hover:bg-[#115F43]">
        //                     <FontAwesomeIcon icon={ faCow }/>
        //                 </div>
        //                 <span className={ `font-semibold text-xl ${ !open && 'hidden' }` }>Dashboard</span>
        //             </li>

        //             <li className="w-full rounded-md flex items-center p-2 gap-x-4">
        //                 <div className="flex justify-center items-center w-10 h-10 border-2 rounded-full duration-100 hover:bg-[#115F43]">
        //                     <FontAwesomeIcon icon={ faCow }/>
        //                 </div>
        //                 <span className={ `font-semibold text-xl ${ !open && 'hidden' }` }>Home</span>
        //             </li>

        //             <li className="w-full rounded-md flex items-center p-2 gap-x-4">
        //                 <div className="flex justify-center items-center w-10 h-10 border-2 rounded-full duration-100 hover:bg-[#115F43]">
        //                     <FontAwesomeIcon icon={ faCow }/>
        //                 </div>
        //                 <span className={ `font-semibold text-xl ${ !open && 'hidden' }` }>Upload</span>
        //             </li>

        //         </ul>

        //         <div className="flex justify-center items-center w-10 h-10 border-2 rounded-full duration-100 hover:bg-[#115F43] mb-5">
        //             <FontAwesomeIcon icon={ faUser } className=""/>
        //         </div>

        //     </div>
        // </div>


    )
}
