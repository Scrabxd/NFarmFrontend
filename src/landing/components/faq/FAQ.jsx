import { Grid, Text } from "@nextui-org/react"
import { faqQuestions } from "../../data"
import { FAQCollapse } from "./FAQCollapse"

export const FAQ = () => {

    return (
        <>

            <section className="flex w-full justify-center content-center">
                <div className="flex flex-col w-11/12 justify-center content-center gap-10 md:flex-row md:flex-wrap">
                        {
                            faqQuestions.map(({ id, title, description }) => (
                                <FAQCollapse key={ id } title={ title } description={ description }/>
                            ))

                        }
                </div>
            </section>
            
        </>
    )
}
