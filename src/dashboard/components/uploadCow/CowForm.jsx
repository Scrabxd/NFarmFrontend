import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { uploadCow } from "../../../store/slices/dashCowSlices/cowForm"
import { getRanches } from "../../../store/slices/dashRanchSlices/getRanches"
import { validationSchemeUploadCow } from "../../validations"
import { SuccesMessage } from "../messages"
import { Input, Spacer } from "@nextui-org/react"

export const CowForm = () => {

    const dispatch = useDispatch()
    const { status, isLoading } = useSelector( state => state.uploadCow ) // reference to store -> reducer -> uploadCow
    const { ranches } = useSelector( state => state.ranches ) // reference to store -> reducer -> ranches

    useEffect(() => {
      
        dispatch( getRanches() ) // get all the ranches of the loogged user
    
    }, [] )

    return (

        <div className="px-3 md:px-10">

            {
                ( status === 200 ) // 200 == ok
                    ? <SuccesMessage message='Ranch created'/>
                    : ''
            }

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
                    dispatch( uploadCow( values, values.idRanch ) )
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
                            <div className="relative inline-flex w-1/2">
                                <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero"/></svg>

                                <select 
                                    className="w-full rounded-xl text-[#147452] font-semibold h-10 pl-5 pr-10 bg-[#18916654] focus:outline-none appearance-none"
                                    value={ values.idRanch } 
                                    onChange={ handleChange }
                                    name="idRanch"
                                    disabled={ ranches.length === 0 } //disable if the user don't have ranches
                                >
                                    <option value=''>Select a ranch</option>
                                    {
                                        ranches.map( ( ranch, index ) => (
                                            <option key={ index } value={ ranch.id }>{ ranch.ranchName }</option>
                                        ) )
                                    }
                                </select>
                                
                            </div>

                        </div>


                        {/* <Spacer y={1.5}/>

                        <input
                            className="w-full rounded-xl text-[#147452] font-semibold p-2 bg-[#18916654] focus:outline-none appearance-none"
                            type="file"
                        /> */}

                        <Spacer y={1.5}/>


                        <Input 
                            type="submit" 
                            aria-label="send-form"
                            bordered
                            fullWidth
                            css={{ bg: '$primary' }}
                            value='Upload cow'
                            animated='false'
                            disabled={ isLoading }
                        />

                        <Spacer y={1.5}/>

                    </form> 

                ) }


            </Formik>

        </div>

    )
}
