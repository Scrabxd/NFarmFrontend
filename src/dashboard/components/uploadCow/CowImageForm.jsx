import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { Divider, Input, Spacer } from "@nextui-org/react"
import { uploadImageCow } from "../../../store/slices/dashCowSlices/cowFormImage/thunks"

export const CowImageForm = () => {

    const dispatch = useDispatch()
    const { isLoading } = useSelector( state => state.uploadCowImage ) // reference to store -> reducer -> uploadCowImage
    const { lastCowId } = useSelector( state => state.uploadCow ) // reference to store -> reducer -> uploadCow

    return (
        <div>

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

                    <form className="w-full" onSubmit={ handleSubmit }>

                        <input
                            className="w-full rounded-xl border-2 border-[#005100] cursor-pointer text-[#005100] font-semibold p-2 bg-[#FFFFFF] focus:outline-none appearance-none
                            file:rounded-md file:border-0 file:text-sm file:font-semibold
                            file:bg-[#005100] file:text-white
                            hover:file:bg-[#7CB93E]"
                            type="file"
                            name="file"
                            onChange={ ( event ) => {
                                setFieldValue( 'file', event.target.files[0] )
                            } }
                        />

                        {/* <Spacer y={1.5}/>

                        <Input 
                            type="submit" 
                            aria-label="send-form"
                            bordered
                            fullWidth
                            css={{ bg: '$primary' }}
                            value='Upload cow'
                            animated='false'
                        />

                        <Spacer y={1.5}/> */}

                    </form> 

                ) }


            </Formik>

        </div>
    )
}
