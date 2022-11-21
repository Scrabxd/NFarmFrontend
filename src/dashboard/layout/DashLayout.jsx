import { SidebarMenu } from "../components/sidebar/SidebarMenu"


export const DashLayout = ({ children }) => {



    return (

        <div className="flex">

            <div>

                <SidebarMenu />

            </div>

            <div className="w-full h-screen overflow-auto z-0">
                { children }
            </div>


        </div>

    )
}
