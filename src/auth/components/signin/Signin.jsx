import { Field, Formik } from "formik"

export const Signin = () => {
    return (

        <Formik
            initialValues={{
                name: '',
            }}

            onSubmit={ ( values ) => {
                console.log( values )
            } }
        >

            { () => (
                <form>
                    <Field placeholder='name' name='name' type='text'/>
                    <input type='submit'>Enviar</input>
                </form>
            ) }

        </Formik>

    )
}
