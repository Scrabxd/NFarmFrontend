import { faqQuestions } from "../../data"
import { FAQCards } from "./FAQCards"

export const FAQ = () => {

    return (
        <>

            <section className="flex w-full justify-center content-center mb-10">
                <div className="flex flex-col w-2/3 justify-center items-center gap-10 md:flex-row md:flex-wrap">
                        {
                            faqQuestions.map(({ id, title, description }) => (
                                <FAQCards key={ id } title={ title } description={ description }/>
                            ))

                        }
                </div>
            </section>
            
        </>
    )
}
