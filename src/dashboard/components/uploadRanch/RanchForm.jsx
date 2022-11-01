import { Card, Input, Spacer } from "@nextui-org/react"
import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { uploadRanch } from "../../../store/slices/ranchForm/thunks"
import { validationSchemeUploadRanch } from "../../validations"
import { SuccesMessage } from "../messages"

export const RanchForm = () => {

    const dispatch = useDispatch()
    const { status } = useSelector( state => state.uploadRanch ) // store -> reducer -> uploadRanch


    return (
        <div className="w-full flex justify-center items-center mb-5">

            <div className="w-full lg:w-1/2">

                {
                    ( status === 201 ) // 201 == created
                        ? <SuccesMessage message='Ranch created'/>
                        : ''
                }

                <Card css={{ border: 'none' }}>
                    <Card.Body>

                        <Formik
                            initialValues={{
                                ranchName: '',
                                city: '',
                                street: '',
                                phoneNumber: '',
                                postalCode: '',
                                country: '',
                                cowHeads: '',
                            }}

                            validationSchema={ validationSchemeUploadRanch }

                            onSubmit={ ( values ) => {
                                console.log( 'formulario enviado' )
                                dispatch( uploadRanch( values ) ) // make a post petition through thunks to create a ranch
                            } }
                        >
                            
                            {/* form props from Formik */}
                            { ({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (

                                <form onSubmit={ handleSubmit }>

                                    <Spacer y={1.5}/>

                                    <Input 
                                        labelPlaceholder="Ranch name"
                                        bordered
                                        fullWidth
                                        name="ranchName"
                                        color={ !errors.ranchName ? 'primary' : 'error' }
                                        value={ values.ranchName }
                                        onChange={ handleChange }
                                        onBlur={ handleBlur }
                                        helperColor={ !errors.ranchName ? 'primary' : 'error' }
                                        helperText={ touched.ranchName && errors.ranchName }
                                        // if the input was touched and we have en error, show the error
                                    />

                                    <Spacer y={1.5}/>

                                    <Input 
                                        labelPlaceholder="Street"
                                        bordered
                                        fullWidth
                                        name="street"
                                        color={ !errors.street ? 'primary' : 'error' }
                                        value={ values.street }
                                        onChange={ handleChange }
                                        onBlur={ handleBlur }
                                        helperColor={ !errors.street ? 'primary' : 'error' }
                                        helperText={ touched.street && errors.street }
                                    />

                                    <Spacer y={1.5}/>

                                    <div className="flex">

                                        <div className="w-1/2">
                                            <Input 
                                                labelPlaceholder="Country"
                                                bordered
                                                name="country"
                                                fullWidth
                                                color={ !errors.country ? 'primary' : 'error' }
                                                value={ values.country }
                                                onChange={ handleChange }
                                                onBlur={ handleBlur }
                                                helperColor={ !errors.country ? 'primary' : 'error' }
                                                helperText={ touched.country && errors.country }
                                            />
                                        </div>

                                        <Spacer  y={ 1.5 } />

                                        <div className="w-1/2">
                                            <Input 
                                                labelPlaceholder="City"
                                                bordered
                                                name="city"
                                                fullWidth
                                                color={ !errors.city ? 'primary' : 'error' }
                                                value={ values.city }
                                                onChange={ handleChange }
                                                onBlur={ handleBlur }
                                                helperColor={ !errors.city ? 'primary' : 'error' }
                                                helperText={ touched.city && errors.city }
                                            />
                                        </div>
                                    </div>

                                        <Spacer  y={ 1.5 } />

                                    <div className="flex">

                                        <div className="w-1/2">
                                            <Input 
                                                labelPlaceholder="Postal Code"
                                                bordered
                                                name="postalCode"
                                                fullWidth
                                                type="number"
                                                min={ 0 }
                                                color={ !errors.postalCode ? 'primary' : 'error' }
                                                value={ values.postalCode }
                                                onChange={ handleChange }
                                                onBlur={ handleBlur }
                                                helperColor={ !errors.postalCode ? 'primary' : 'error' }
                                                helperText={ touched.postalCode && errors.postalCode }
                                            />
                                        </div>

                                        <Spacer  y={ 1.5 } />

                                        <div className="w-1/2">
                                            <Input 
                                                labelPlaceholder="Phone Number"
                                                bordered
                                                name="phoneNumber"
                                                type="number"
                                                fullWidth
                                                color={ !errors.phoneNumber ? 'primary' : 'error' }
                                                value={ values.phoneNumber }
                                                onChange={ handleChange }
                                                onBlur={ handleBlur }
                                                helperColor={ !errors.phoneNumber ? 'primary' : 'error' }
                                                helperText={ touched.phoneNumber && errors.phoneNumber }
                                            />
                                        </div>
                                    </div>

                                    <Spacer y={1.5}/>

                                    <Input 
                                        labelPlaceholder="Cow Heads"
                                        bordered
                                        name="cowHeads"
                                        type="number"
                                        fullWidth
                                        color={ !errors.cowHeads ? 'primary' : 'error' }
                                        value={ values.cowHeads }
                                        onChange={ handleChange }
                                        onBlur={ handleBlur }
                                        helperColor={ !errors.cowHeads ? 'primary' : 'error' }
                                        helperText={ touched.cowHeads && errors.cowHeads }
                                    />

                                    <Spacer y={1.5}/>

                                    {/* <Input 
                                        labelPlaceholder="Certificates"
                                        bordered
                                        type='file'
                                        min={ 0 }
                                        color="primary"
                                        name="weight"
                                    />

                                    <Spacer y={1.5}/> */}

                                    <Input 
                                        type="submit" 
                                        aria-label="send-form"
                                        bordered
                                        fullWidth
                                        css={{ bg: '$primary' }}
                                        value='Upload Ranch'
                                        animated='false'
                                    />

                                    <Spacer y={1.5}/>

                                </form> 

                            ) }


                        </Formik>

                    </Card.Body>
                </Card>

            </div>

        </div>
    )
}
