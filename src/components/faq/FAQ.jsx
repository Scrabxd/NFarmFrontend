import { Grid, Text } from "@nextui-org/react"
import { faqQuestions } from "../../helpers/faqQuestions"
import { FAQCollapse } from "./FAQCollapse"

export const FAQ = () => {
    return (
        <>
            <Grid.Container justify="center" css={{ mt:"8rem" }}>
				<Grid xs={10} direction="column" alignItems="center">
				<Text h3 className="line">F.A.Q.</Text>
				<Text h1>FREQUENTLY ASKED QUESTIONS</Text>
				</Grid>
			</Grid.Container>

            <Grid.Container justify="center">
                <Grid xs={11.5} direction="column">
                    {
                        faqQuestions.map(({ id, title, description }) => (
                            <FAQCollapse key={ id } title={ title } description={ description }/>
                        ))
                    }
                </Grid>
            </Grid.Container>
        </>
    )
}
