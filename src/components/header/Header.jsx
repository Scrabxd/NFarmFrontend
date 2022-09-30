import { Grid, Text } from "@nextui-org/react"
import Spline from '@splinetool/react-spline';

export const Header = () => {
    return (

        <header className="flex w-full justify-center items-center">
            <div className="flex flex-col sm:flex-row w-11/12">

                <div className="flex flex-col justify-center content-center gap-y-7 w-full sm:w-3/5">
                    <p className="text-6xl sm:text-7xl italic font-bold">You, Your Cattle & The System</p>
                    <p className="text-xl sm:text-3xl">Automated cattle certification via NFT</p>
                </div>

                <div className="w-full sm:w-2/5 h-96">
                    <Spline scene="https://prod.spline.design/3RcuLnlMwt6kZbmt/scene.splinecode" />
                </div>

            </div>
        </header>


        // <Grid.Container justify="center" css={{ mt:"1rem" }}>
        //     <Grid xs={11} sm={7} md={7} lg={7} xl={7} direction="column" justify="center" >
        //         <Text h1 size={70} em>You, Your Cattle & The System</Text>
        //         <Text h2 hideIn="xs">Automated cattle certification via NFT</Text>
        //     </Grid>
        //     <Grid xs={11} sm={4} md={4} lg={4} xl={4} css={{ aspectRatio: '1/1' }}>
        //         {/* <Spline scene="https://prod.spline.design/3RcuLnlMwt6kZbmt/scene.splinecode" /> */}
        //     </Grid>
        // </Grid.Container>
    )
}
