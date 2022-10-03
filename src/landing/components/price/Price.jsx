import { Grid, Text } from "@nextui-org/react"
import { PriceDocument } from "./PriceDocument"
import { PriceNFT } from "./PriceNFT"

export const Price = () => {
    return (
        <>
            
            <section className="flex w-full justify-center content-center mt-10 sm:mt-20">
				<div className="flex flex-col w-11/12 justify-center content-center">
					
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
            
            {/* <Grid.Container justify="center" css={{ mt:"8rem" }} id="pricing">
				<Grid xs={10} direction="column" alignItems="center">
				<Text h3 className="line" >Pricing</Text>
				<Text h1>Our Business Model</Text>
				</Grid>
			</Grid.Container>

            <Grid.Container direction="row" wrap="wrap" justify="center">
                <Grid xs={12} sm={3} justify="center">
                    <PriceNFT />
                </Grid>
                <Grid xs={12} sm={3} justify="center">
                    <PriceDocument />
                </Grid>
            </Grid.Container> */}
        </>
    )
}
