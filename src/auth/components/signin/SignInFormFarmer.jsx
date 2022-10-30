import { Card, Input, Spacer } from "@nextui-org/react"
import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../../store/slices/signup"
import { validationSchemeSignFarmer } from "../../validations"

export const SignInFormFarmer = () => {

    const dispatch = useDispatch()
    const { status } = useSelector( state => state.register ) // reference to store -> reducer -> register
    
    return (
        
        <Card css={{ border:"none" }}>
            <Card.Body>
                
                <Formik
                    initialValues={{
                        // id_role: 1,
                        name: '',
                        lastName: '',
                        rfc: '',
                        countryExportation: '',
                        credentialExportation: '',
                        email: '',
                        password: ''
                    }}

                    validationSchema = { validationSchemeSignFarmer }

                    onSubmit={ ( values ) => { //function to execute when we send the form
                        console.log( 'formulario enviado' )
                        //dispatch( registerUser( values ) ) // signup slice -> thunk register a new user request
                        
                        //console.log({ status })
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
                                        fullWidth
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
                                        labelPlaceholder="Lastname" 
                                        bordered 
                                        color={ !errors.lastName ? 'primary' : 'error' }
                                        fullWidth
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
                                labelPlaceholder="RFC" 
                                bordered 
                                color={ !errors.rfc ? 'primary' : 'error' }
                                name="rfc"
                                value={ values.rfc }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                helperColor={ !errors.rfc ? 'primary' : 'error' }
                                helperText={ touched.rfc && errors.rfc }
                            />

                            <Spacer y={1.5}/>

                            <Input 
                                labelPlaceholder="Exportation country" 
                                bordered 
                                color={ !errors.countryExportation ? 'primary' : 'error' }
                                name="countryExportation"
                                value={ values.countryExportation }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                helperColor={ !errors.countryExportation ? 'primary' : 'error' }
                                helperText={ touched.countryExportation && errors.countryExportation }
                            />

                            <Spacer y={1.5}/>

                            <Input 
                                labelPlaceholder="Exportation credencial" 
                                bordered 
                                color={ !errors.credentialExportation ? 'primary' : 'error' }
                                name="credentialExportation"
                                value={ values.credentialExportation }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                helperColor={ !errors.credentialExportation ? 'primary' : 'error' }
                                helperText={ touched.credentialExportation && errors.credentialExportation }
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
