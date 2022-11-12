import { Card, Input, Loading, Spacer } from "@nextui-org/react"
import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { uploadRestaurantBranch } from "../../../store/slices/restaurantForm/thunks"
import { setRerenderState } from "../../../store/slices/restaurants/getRestaurantsSlice"
import { validationSchemeUploadRestaurant } from "../../validations"
import { SuccesMessage } from "../messages"

export const RestaurantForm = () => {

    const dispatch = useDispatch()
    const { status, isLoading } = useSelector( state => state.uploadRestaurantBranch ) // store -> reducer -> uploadRestaurantBranch

    return (
        <div className="w-full flex justify-center items-center mb-5">

            <div className="w-full md:w-1/2">

                {
                    ( status === 201 ) // 201 == created
                        ? <SuccesMessage message='Branch created'/>
                        : ''
                }

                <Card css={{ border: 'none' }}>
                    <Card.Body>

                        <Formik
                            initialValues={{
                                branchName: '',
                                city: '',
                                street: '',
                                outsideNumber: '',
                                phoneNumber: '',
                                postalCode: '',
                                country: '',
                            }}

                            validationSchema={ validationSchemeUploadRestaurant }

                            onSubmit={ ( values ) => {
                                console.log('formulario enviado')
                                dispatch( uploadRestaurantBranch( values ) )
                                // make that the table rerender with the new data changing the state of the table when we click the button
                                dispatch( setRerenderState() )
                            } }
                        >
                            
                            {/* form props from Formik */}
                            { ({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (

                                <form className="w-full flex flex-col" onSubmit={ handleSubmit }>

                                    <Spacer y={1.5}/>

                                    <Input 
                                        labelPlaceholder="Branch Name"
                                        bordered
                                        fullWidth
                                        name="branchName"
                                        color={ !errors.branchName ? 'primary' : 'error' }
                                        value={ values.branchName }
                                        onChange={ handleChange }
                                        onBlur={ handleBlur }
                                        helperColor={ !errors.branchName ? 'primary' : 'error' }
                                        helperText={ touched.branchName && errors.branchName }
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

                                        <div className="w-1/3">
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

                                        <div className="w-1/3">
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

                                        <Spacer  y={ 1.5 } />

                                        <div className="w-1/3">
                                            <Input 
                                                labelPlaceholder="Out Number"
                                                bordered
                                                type='number'
                                                name="outsideNumber"
                                                fullWidth
                                                color={ !errors.outsideNumber ? 'primary' : 'error' }
                                                value={ values.outsideNumber }
                                                onChange={ handleChange }
                                                onBlur={ handleBlur }
                                                helperColor={ !errors.outsideNumber ? 'primary' : 'error' }
                                                helperText={ touched.outsideNumber && errors.outsideNumber }
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

                                    {
                                        ( !isLoading )
                                            ? <Input 
                                                type="submit" 
                                                aria-label="send-form"
                                                bordered
                                                fullWidth
                                                css={{ bg: '$primary' }}
                                                value='Upload Restaurant'
                                                animated='false' 
                                            />
                                            : <Loading type="points"/>
                                    }

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