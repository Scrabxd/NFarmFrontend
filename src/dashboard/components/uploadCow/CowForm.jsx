import { Card, Input, Spacer } from "@nextui-org/react"
import { Formik } from "formik"
import { validationSchemeUploadCow } from "../../validations"

export const CowForm = () => {

    return (
        <div className="w-full flex justify-center items-center mb-5">

            <div className="w-full md:w-1/2">

                <Card css={{ border: 'none' }}>
                    <Card.Body>

                        <Formik
                            initialValues={{
                                name: '',
                                breed: '',
                                weight: '',
                                idRanch: ''
                            }}

                            validationSchema={ validationSchemeUploadCow }

                            onSubmit={ ( values ) => {
                                console.log( values )
                            } }
                        >
                            
                            {/* form props from Formik */}
                            { ({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (

                                <form onSubmit={ handleSubmit }>

                                    <Spacer y={1.5}/>

                                    <Input 
                                        labelPlaceholder="Cow name"
                                        bordered
                                        fullWidth
                                        name="name"
                                        color={ !errors.name ? 'primary' : 'error' }
                                        value={ values.name }
                                        onChange={ handleChange }
                                        onBlur={ handleBlur }
                                        helperColor={ !errors.name ? 'primary' : 'error' }
                                        helperText={ touched.name && errors.name }
                                        // if the input was touched and we have en error, show the error
                                    />

                                    <Spacer y={1.5}/>

                                    <Input 
                                        labelPlaceholder="Breed"
                                        bordered
                                        fullWidth
                                        name="breed"
                                        color={ !errors.breed ? 'primary' : 'error' }
                                        value={ values.breed }
                                        onChange={ handleChange }
                                        onBlur={ handleBlur }
                                        helperColor={ !errors.breed ? 'primary' : 'error' }
                                        helperText={ touched.breed && errors.breed }
                                    />

                                    <Spacer y={1.5}/>

                                    <div className="flex">

                                        <div className="w-1/2">
                                            <Input 
                                                labelPlaceholder="Weight"
                                                bordered
                                                type='number'
                                                min={ 0 }
                                                name="weight"
                                                labelRight='.kg'
                                                fullWidth
                                                color={ !errors.weight ? 'primary' : 'error' }
                                                value={ values.weight }
                                                onChange={ handleChange }
                                                onBlur={ handleBlur }
                                                helperColor={ !errors.weight ? 'primary' : 'error' }
                                                helperText={ touched.weight && errors.weight }
                                            />
                                        </div>

                                        <Spacer  y={ 1.5 } />

                                        <div className="w-1/2">
                                            <Input 
                                                labelPlaceholder="Ranch"
                                                bordered
                                                name="idRanch"
                                                fullWidth
                                                color={ !errors.idRanch ? 'primary' : 'error' }
                                                value={ values.idRanch }
                                                onChange={ handleChange }
                                                onBlur={ handleBlur }
                                                helperColor={ !errors.idRanch ? 'primary' : 'error' }
                                                helperText={ touched.idRanch && errors.idRanch }
                                            />
                                        </div>

                                    </div>


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
                                        value='Upload cow'
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
