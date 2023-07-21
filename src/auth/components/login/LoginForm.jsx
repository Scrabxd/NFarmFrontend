import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../../store/slices/authSlices/login"
import { Navigate } from "react-router-dom"

import { AuthLayout } from "../../layout/AuthLayout"

import { Formik } from "formik"
import { validationSchemeLogin } from "../../validations"
import { ErrorMessage } from "../errorMessage/ErrorMessage"
import { Card, Input, Loading, Spacer, } from "@nextui-org/react"

export const LoginForm = () => {

    const dispatch = useDispatch()
    const { status, errorMessage, isLoading } = useSelector( state => state.login )


    return (

        <AuthLayout content="Do not have an account?" input="Sign Up here" route="/auth/register">

            {
                ( errorMessage )
                    ? <ErrorMessage message={ errorMessage }/>
                    : ''
            }

            {
                ( status === 200 ) // 200 == ok
                    ? <Navigate to='/dash' />
                    : ''
            }

            <Card css={{ border:"none"}}>
                <Card.Body>

                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}

                        validationSchema={ validationSchemeLogin }

                        onSubmit={ ( values ) => { //function to execute when we send the form
                            console.log( 'formulario enviado' )

                            dispatch( loginUser( values ) ) // make login request thrugh thunks

                        } }
                    >
                        

                        {/* form props from Formik */}
                        { ({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (

                            <form className="w-full flex flex-col gap-2" onSubmit={ handleSubmit }>

                                <div className="flex flex-col relative items-center">
                                    <p className="text-4xl text-[#7CB93E] sm:text-5xl">Welcome</p>
                                    <p className="text-lg text-[#444446] sm:text-xl">Please login to continue</p>
                                </div>

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

                                {
                                    ( !isLoading )
                                        ? <Input 
                                            type="submit" 
                                            aria-label="send-form" 
                                            value='Login' 
                                            bordered
                                            fullWidth
                                            css={{ bg: '#7CB93E', cursor: 'pointer'}}
                                            style={{color:"#EBEBED"}}
                                            animated='false'
                                        />
                                        : <Loading type="points"/>
                                }

                            </form>

                        ) }   


                    </Formik>

                </Card.Body>
            </Card>

        </AuthLayout>
        
        
    )
}
