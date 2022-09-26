import { Grid, Image, Text } from "@nextui-org/react"
import { aboutUsInfo } from "../../helpers/aboutUsInfo"
import { AboutUsBadges } from "./AboutUsBadges"


export const AboutUs = () => {
    return (
        <Grid.Container css={{ mt:"5rem" }} justify="center" id="about">
            <Grid xs={0} sm={5} md={5} lg={5} xl={5} justify="center">
                <Image src="assets/img/about/about.png"/>
            </Grid>

            <Grid xs={10} sm={6} md={6} lg={6} xl={6} justify="center" direction="column" alignItems="center">
                <Text h1>What are we doing at NFarm?</Text>
                <Text>
                    On NFarm we think that 88 Million tons of food waste it's a shame,
                    that's wy we want to unify all of the burocratic processes into one
                    stamp that 100% of the time will assure that there is quality in the
                    meat and that the user will be able to trace it back to where it
                    came from.
                </Text>

                {
                    aboutUsInfo.map( ({ id, title, description, srcImg, altImg }) => (
                        <AboutUsBadges 
                            key={ id }
                            title={ title }
                            description={ description }
                            srcImg={ srcImg }
                            altImg={ altImg }
                        />
                    ))
                }

            </Grid>
        </Grid.Container>
    )
}
