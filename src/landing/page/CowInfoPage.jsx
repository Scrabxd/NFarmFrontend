import { CowImage } from "../components/qrComponents/cowImage"

export const CowInfoPage = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center">
                <a href="/"><img src="/assets/img/logos/nfarm-logoCircle.png" className="w-24 my-4"/></a>
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="w-11/12 md:w-3/5 flex flex-col justify-center items-center">

                    <CowImage />

                </div>
            </div>


            
        </>
    )
}
