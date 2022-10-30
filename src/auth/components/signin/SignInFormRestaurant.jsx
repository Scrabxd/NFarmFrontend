import { Card, Input, Spacer } from "@nextui-org/react"
import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { validationSchemeSignRestaurant } from "../../validations"

export const SignInFormRestaurant = () => {

    const dispatch = useDispatch()
    const { status } = useSelector( state => state.login ) // reference to store -> reducer -> login

    
    return (
        
        <Card css={{ border:"none" }}>
            <Card.Body>
                
                <Formik
                    initialValues={{
                        id_role: 2,
                        name: '',
                        lastName: '',
                        restaurantName: '',
                        email: '',
                        password: ''
                    }}

                    validationSchema = { validationSchemeSignRestaurant }

                    onSubmit={ ( values ) => { //function to execute when we send the form
                        console.log( values )
                        console.log( 'formulario enviado' )
                    } }
                >
                    {/* form props from Formik */}
                    { ({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (

                        <form className="w-full flex flex-col gap-2" onSubmit={ handleSubmit }>
                            <div className="flex mt-4">
                                <div className="w-1/2">

                                    <Input 
                                        labelPlaceholder="Name" 
                                        bordered 
                                        color={ !errors.name ? 'primary' : 'error' }
                                        css={{ w: '100%' }}
                                        name="name"
                                        value={ values.name }
                                        onChange={ handleChange }
                                        onBlur={ handleBlur }
                                        helperColor={ !errors.name ? 'primary' : 'error' }
                                        helperText={ touched.name && errors.name }
                                        // if the input was touched and we have en error, show the error
                                    />

                                </div>
                                <Spacer x={1.5}/>
                                <div className="w-1/2">

                                    <Input 
                                        labelPlaceholder="Last name" 
                                        bordered 
                                        color={ !errors.lastName ? 'primary' : 'error' }
                                        css={{ w: '100%' }}
                                        name="lastName"
                                        value={ values.lastName }
                                        onChange={ handleChange }
                                        onBlur={ handleBlur }
                                        helperColor={ !errors.lastName ? 'primary' : 'error' }
                                        helperText={ touched.lastName && errors.lastName }
                                    />

                                </div>
                            </div>

                            <Spacer y={1.5}/>

                            <Input 
                                labelPlaceholder="Restaurant name" 
                                bordered 
                                color={ !errors.restaurantName ? 'primary' : 'error' }
                                name="restaurantName"
                                value={ values.restaurantName }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                helperColor={ !errors.restaurantName ? 'primary' : 'error' }
                                helperText={ touched.restaurantName && errors.restaurantName }
                            />

                            <Spacer y={1.5}/>

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

                            <Spacer y={1.5}/>

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

                            <Spacer y={1.5}/>

                            {/* <Button color="primary" onPress={ onSendSigninData }>Create an account</Button> */}

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


    )
}
