import { Grid, Text } from "@nextui-org/react"
// import Spline from '@splinetool/react-spline';

export const Header = () => {
    return (
        <>
            <header className="flex w-full justify-center items-center">
                <div className="flex flex-col sm:flex-row w-[66%] ">

                    <div className="flex flex-col justify-center content-center gap-y-7 w-full sm:w-3/5">
                        <p className="text-6xl sm:text-7xl italic font-bold">You, Your Cattle & The System</p>
                        <p className="text-xl sm:text-3xl">Automated cattle certification via NFT</p>
                    </div>

                    <div className="w-full mt-7 sm:w-2/5 sm:mt-0">
                        <img alt="cloud nodes" src="assets/img/header/clouds-nodes.png" className="img-shape" />  
                    </div>

                </div>
            </header>

        </>
    )
}
