import { Card, Input, Spacer } from "@nextui-org/react"
import { Formik } from "formik"
import { validationSchemeLogin } from "../../validations"
import { AuthLayout } from "../../layout/AuthLayout"

export const LoginForm = () => {


    return (

        <AuthLayout title='Access to the system'>

            <Card css={{ border:"none" }}>
                <Card.Body>

                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}

                        validationSchema={ validationSchemeLogin }

                        onSubmit={ ( values ) => { //function to execute when we send the form
                            console.log( values )
                            console.log( 'formulario enviado' )
                        } }
                    >

                        {/* form props from Formik */}
                        { ({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (

                            <form className="w-full flex flex-col gap-2" onSubmit={ handleSubmit }>

                                <Spacer x={1.5}/>

                                <Input 
                                    labelPlaceholder="Email" 
                                    bordered 
                                    color={ !errors.email ? 'primary' : 'error' }
                                    name='email'
                                    value={ values.email }
                                    onChange={ handleChange }    
                                    onBlur={ handleBlur }
                                    helperColor={ !errors.email ? 'primary' : 'error' }
                                    helperText={ touched.email && errors.email }
                                />

                                <Spacer x={1.5}/>

                                <Input.Password 
                                    labelPlaceholder="Password" 
                                    bordered 
                                    color={ !errors.password ? 'primary' : 'error' }
                                    name="password"
                                    value={ values.password }
                                    onChange={ handleChange }  
                                    onBlur={ handleBlur } 
                                    helperColor={ !errors.password ? 'primary' : 'error' }
                                    helperText={ touched.password && errors.password } 
                                />
                                
                                <Spacer x={1.5}/>

                                <Input 
                                    type="submit" 
                                    aria-label="send-form"
                                    status='success'
                                    value='Create an account'
                                />

                            </form>

                        ) }   


                    </Formik>

                </Card.Body>
            </Card>

        </AuthLayout>
        
        
    )
}
