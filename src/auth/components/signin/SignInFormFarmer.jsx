import { Button, Card, Input, Spacer } from "@nextui-org/react"
import { Form, Formik } from "formik"
import axios from 'axios'

const url = 'https://nfarm-back.herokuapp.com/api/nfarm'

export const SignInFormFarmer = () => {

    
    return (
        
        <Card css={{ border:"none" }}>
            <Card.Body>
                
                <Formik
                    initialValues={{
                        id_role: 1,
                        name: '',
                        last_name: '',
                        rfc: '',
                        country_Exportation: '',
                        credential_Exportation: '',
                        email: '',
                        password: ''
                    }}

                    validate={ ( values ) => {

                        let errors = {  }
                        
                        // name validations
                        if ( !values.name ) {
                            errors.name = 'Please type a name'
                        } else if ( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test( values.name ) ){ // true if it meets the regular expression
                            errors.name = 'The name can only contain letters and spaces'
                        }

                        //Lastname validations
                        if ( !values.last_name ) {
                            errors.last_name = 'Please type a lastname'
                        } else if ( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test( values.last_name ) ){ // true if it meets the regular expression
                            errors.last_name = 'The lastname can only contain letters and spaces'
                        }

                        //rfc validations
                        if ( !values.rfc ) {
                            errors.rfc = 'Please type a rfc'
                        } else if ( values.rfc.length < 12 || values.rfc.length > 13 ){ // true if it meets the regular expression
                            errors.rfc = 'Invalid rfc'
                        }

                        //country exportation validations
                        if ( !values.country_Exportation ) {
                            errors.country_Exportation = 'Please type an exportation country'
                        }

                        //credential exportation validations
                        if ( !values.credential_Exportation ) {
                            errors.credential_Exportation = 'Please type an exportation credential'
                        }

                        //email validations
                        if ( !values.email ) {
                            errors.email = 'Please type an email'
                        } else if ( !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test( values.email ) ){
                            errors.email = 'invalid email'
                        }

                        //password validations
                        if ( !values.password ) {
                            errors.password = 'Please type a password'
                        } else if ( !/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/.test( values.password ) ){
                            errors.password= 'Password should contain at least one number and one special character and 10-16 characters longer'
                        }

                        return errors

                    }}

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
                                        labelPlaceholder="Lastname" 
                                        bordered 
                                        color={ !errors.last_name ? 'primary' : 'error' }
                                        css={{ w: '100%' }}
                                        name="last_name"
                                        value={ values.last_name }
                                        onChange={ handleChange }
                                        onBlur={ handleBlur }
                                        helperColor={ !errors.last_name ? 'primary' : 'error' }
                                        helperText={ touched.last_name && errors.last_name }
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
                                color={ !errors.country_Exportation ? 'primary' : 'error' }
                                name="country_Exportation"
                                value={ values.country_Exportation }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                helperColor={ !errors.country_Exportation ? 'primary' : 'error' }
                                helperText={ touched.country_Exportation && errors.country_Exportation }
                            />

                            <Spacer y={1.5}/>

                            <Input 
                                labelPlaceholder="Exportation credencial" 
                                bordered 
                                color={ !errors.credential_Exportation ? 'primary' : 'error' }
                                name="credential_Exportation"
                                value={ values.credential_Exportation }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                helperColor={ !errors.credential_Exportation ? 'primary' : 'error' }
                                helperText={ touched.credential_Exportation && errors.credential_Exportation }
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
