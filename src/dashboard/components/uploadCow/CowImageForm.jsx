import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { Divider, Input, Spacer } from "@nextui-org/react"
import { uploadImageCow } from "../../../store/slices/dashCowSlices/cowFormImage/thunks"

export const CowImageForm = () => {

    const dispatch = useDispatch()
    const { isLoading } = useSelector( state => state.uploadCowImage ) // reference to store -> reducer -> uploadCowImage
    const { lastCowId } = useSelector( state => state.uploadCow ) // reference to store -> reducer -> uploadCow

    return (
        <div className="px-3 md:px-10">

            <Formik
                initialValues={{
                    file: ''
                }}

                onSubmit={ ( values ) => {
                    console.log( values )
                    dispatch( uploadImageCow( values, lastCowId ) )
                } }
            >
                
                {/* form props from Formik */}
                { ({ values, errors, touched, handleSubmit, handleChange, handleBlur, setFieldValue }) => (

                    <form onSubmit={ handleSubmit }>

                        <Divider />

                        <Spacer y={1.5}/>

                        <input
                            className="w-full rounded-xl text-[#147452] font-semibold p-2 bg-[#18916654] focus:outline-none appearance-none"
                            type="file"
                            name="file"
                            onChange={ ( event ) => {
                                setFieldValue( 'file', event.target.files[0] )
                            } }
                        />

                        <Spacer y={1.5}/>

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

        </div>
    )
}
