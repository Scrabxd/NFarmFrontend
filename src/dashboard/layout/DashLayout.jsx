import { SidebarMenu } from "../components/sidebar/SidebarMenu"

export const DashLayout = ({ children, title }) => {
    return (

        <div className="w-full">

            <SidebarMenu />

            <div className="bg-red-300 flex flex-col justify-center items-center">
                <p className="text-3xl text-center sm:text-5xl font-bold">{ title }</p>

                <div className="w-11/12 bg-blue-300 mt-6 flex flex-row flex-wrap justify-center items-center gap-4 ">
            
                    { children }

                </div>

            </div>


        </div>

    )
}
