import { Grid, Text } from "@nextui-org/react"
import { PriceDocument } from "./PriceDocument"
import { PriceNFT } from "./PriceNFT"

export const Price = () => {
    return (
        <>
            
            <section className="flex w-full justify-center content-center mt-10 sm:mt-20" id="pricing">
				<div className="flex flex-col w-2/3 justify-center content-center">
					
					<div className="flex flex-col justify-center items-center">
                        <p className="line text-xl sm:text-2xl font-semibold">Pricing</p>
                        <p className="text-3xl text-center sm:text-5xl font-bold">Our Business Model</p>
                    </div>

					<div className="flex flex-col justify-center items-center gap-5 mt-5 sm:flex-row sm:gap-x-10">
                        <PriceNFT />
                        <PriceDocument />
                    </div>

				</div>
			</section>
    
        </>
    )
}
