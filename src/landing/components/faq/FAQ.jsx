import { Grid, Text } from "@nextui-org/react"
import { faqQuestions } from "../../data"
import { FAQCollapse } from "./FAQCollapse"

export const FAQ = () => {
    return (
        <>

            <section className="flex w-full justify-center content-center mt-6">
                <div className="flex flex-col w-11/12 justify-center content-center">

                    <div className="flex flex-col justify-center items-center">
                        <p className="line text-xl sm:text-2xl font-semibold">F.A.Q.</p>
                        <p className="text-3xl text-center sm:text-5xl font-bold">FREQUENTLY ASKED QUESTIONS</p>
                    </div>

                    <div className="flex flex-col">
                        {
                            faqQuestions.map(({ id, title, description }) => (
                                <FAQCollapse key={ id } title={ title } description={ description }/>
                            ))
                        }
                    </div>

                </div>
            </section>
{/* 
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
            </Grid.Container> */}
        </>
    )
}
