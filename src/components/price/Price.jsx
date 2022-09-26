import { Grid, Text } from "@nextui-org/react"
import { PriceDocument } from "./PriceDocument"
import { PriceNFT } from "./PriceNFT"

export const Price = () => {
    return (
        <>
            <Grid.Container justify="center" css={{ mt:"8rem" }} id="pricing">
				<Grid xs={10} direction="column" alignItems="center">
				<Text h3 className="line" >Pricing</Text>
				<Text h1>Our Business Model</Text>
				</Grid>
			</Grid.Container>

            <Grid.Container direction="row" gap={2} wrap="wrap" justify="center">
                <Grid xs={12} sm={3} justify="center">
                    <PriceNFT />
                </Grid>
                <Grid xs={12} sm={3} justify="center">
                    <PriceDocument />
                </Grid>
            </Grid.Container>
        </>
    )
}
