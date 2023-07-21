import { FooterAuth } from "../components/footer/FooterAuth"

export const AuthLayout = ({ children, content, input, route }) => {
    return (

        <div className="flex w-full justify-center content-center">
            <div className="flex flex-col w-11/12 justify-center items-center mt-6">

                {/* <p className="text-4xl font-bold sm:text-5xl">NFARM</p> */}
                <img src="../public/assets/img/logos/nfarm-logoCircle.png" className="w-24"/>

                <div className="w-[60%] lg:w-[40%] mt-6">
                    
                    { children }
                </div>
                <div className="flex mt-6">
                    <p className="text-lg text-[#444446] sm:text-xl mr-1">{content}</p><a href={route} className="text-lg text-[#7CB93E] sm:text-xl ml-1">{input}</a>
                </div>

            </div>
        </div>

    )
}
