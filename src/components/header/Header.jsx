import { Card, Grid, Text } from "@nextui-org/react"
import Spline from '@splinetool/react-spline';
import styles from '../../../styles/header/Header.module.css'

export const Header = () => {
    return (

        <Grid.Container justify="center" gap={2}>
            <Grid xs={11} sm={7} md={7} lg={7} xl={7} direction="column" justify="center" >
                <Text h1 size={70} em>You, Your Cattle & The System</Text>
                <Text h2 hideIn="xs">Automated cattle certification via NFT</Text>
            </Grid>
            <Grid xs={11} sm={4} md={4} lg={4} xl={4} css={{ aspectRatio: '1/1' }}>
                <Spline scene="https://prod.spline.design/3RcuLnlMwt6kZbmt/scene.splinecode" />
            </Grid>
        </Grid.Container>
    )
}
