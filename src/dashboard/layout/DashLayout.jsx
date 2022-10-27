import { Divider } from "@nextui-org/react"
import { SidebarMenu } from "../components/sidebar/SidebarMenu"

export const DashLayout = ({ children, title }) => {
    return (

        <div className="w-full flex">

            <div>

                <SidebarMenu title={ title }/>

            </div>

            <div className="h-screen overflow-auto">

                <div className="flex flex-col justify-center items-center">

                <p className="text-3xl text-center sm:text-5xl font-bold mb-4 mt-4">{ title }</p>
                <Divider />

                    <div className="w-11/12">
                
                        { children }

                    </div>

                </div>

            </div>
            


        </div>

    )
}
