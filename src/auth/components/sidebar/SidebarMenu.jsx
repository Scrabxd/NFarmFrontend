import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faN, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"

export const SidebarMenu = () => {

    const [ open, setOpen ] = useState( false )

    return (

        <div className={ `${ open ? "w-72" : "w-20" } duration-100 h-screen bg-white relative p-5 pt-8` }>

                <FontAwesomeIcon icon={ faCircleArrowLeft } size='2x'
                    className={`icon absolute cursor-pointer -right-4 top-8 w-7 duration-200 ${ !open && 'rotate-180' }`} 
                    onClick={ () => setOpen( !open ) } /> 

                <div className="flex gap-x-4 justify-center items-center">
                    <FontAwesomeIcon icon={ faN } className={ `icon cursor-pointer duration-300 ${ open && 'rotate-[360deg]' } ` } />
                    <p className={ `text-black origin-left font-semibold text-xl duration-200 ${ !open && 'scale-0' }` }>NFarm</p>
                </div>

        </div>

    )
}
