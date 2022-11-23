import { CowImage } from "../components/qrComponents/cowImage"

export const CowInfoPage = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center">
                <h1>NFarm</h1>
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="w-11/12 md:w-3/5 flex flex-col justify-center items-center">

                    <CowImage />

                </div>
            </div>


            
        </>
    )
}
