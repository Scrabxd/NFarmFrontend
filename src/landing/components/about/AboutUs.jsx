import { Grid, Image, Spacer, Text } from "@nextui-org/react"
import { aboutUsInfo } from "../../data"
import { AboutUsBadges } from "./AboutUsBadges"


export const AboutUs = () => {
    return (

        <section className="flex w-full justify-center content-center mt-6">
            <div className="flex w-11/12 justify-center content-center">

                <div className="hidden sm:flex sm:justify-center sm:items-center sm:w-2/5">
                    <img src="assets/img/about/about.png" className="w-full"/>
                </div>

                <div className="flex flex-col w-11/12 justify-center items-center sm:w-3/5">

                    <p className="text-3xl font-semibold mt-8 text-center sm:text-4xl">What are we doing at NFarm?</p>
                    <p className="text-justify mt-3 sm:text-lg">
                        On NFarm we think that 88 Million tons of food waste it's a shame,
                        that's wy we want to unify all of the burocratic processes into one
                        stamp that 100% of the time will assure that there is quality in the
                        meat and that the user will be able to trace it back to where it
                        came from.
                    </p>

                    {
                        aboutUsInfo.map( ({ id, title, description, srcImg, altImg }) => (
                            <AboutUsBadges 
                                key={ id }
                                title={ title }
                                description={ description }
                                srcImg={ srcImg }
                                altImg={ altImg }    
                            />
                        ) )
                    }

                </div>

            </div>
        </section>
        // <Grid.Container css={{ mt:"5rem" }} justify="center" id="about">
        //     <Grid xs={0} sm={5} md={5} lg={5} xl={5} justify="center">
        //         <Image src="assets/img/about/about.png"/>
        //     </Grid>

        //     <Grid xs={10} sm={6} md={6} lg={6} xl={6} justify="center" direction="column" alignItems="center">
        //         <Text h1>What are we doing at NFarm?</Text>
        //         <Text>
        //             On NFarm we think that 88 Million tons of food waste it's a shame,
        //             that's wy we want to unify all of the burocratic processes into one
        //             stamp that 100% of the time will assure that there is quality in the
        //             meat and that the user will be able to trace it back to where it
        //             came from.
        //         </Text>

        //         {
        //             aboutUsInfo.map( ({ id, title, description, srcImg, altImg }) => (
        //                 <AboutUsBadges 
        //                     key={ id }
        //                     title={ title }
        //                     description={ description }
        //                     srcImg={ srcImg }
        //                     altImg={ altImg }
        //                 />
        //             ))
        //         }

        //     </Grid>
        // </Grid.Container>
    )
}
