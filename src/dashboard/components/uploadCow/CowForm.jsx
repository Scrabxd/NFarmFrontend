import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { uploadCow } from "../../../store/slices/dashCowSlices/cowForm"
import { getRanches } from "../../../store/slices/dashRanchSlices/getRanches"
import { validationSchemeUploadCow } from "../../validations"
import { SuccesMessage } from "../messages"
import { Input, Spacer, Button, Loading } from "@nextui-org/react"
import { CowImageForm } from "./CowImageForm"

export const CowForm = () => {

    const [timeLeft, setTimeLeft] = useState(5); // 5 seconds initially

    const [archivos, setArchivos] = useState(null);

    const subirArchivos = e => {
        setArchivos(e);
    }

    const dispatch = useDispatch()
    const { status, isLoading } = useSelector( state => state.uploadCow ) // reference to store -> reducer -> uploadCow
    const { ranches } = useSelector( state => state.ranches ) // reference to store -> reducer -> ranches

    useEffect(() => {
      
        dispatch( getRanches() ) // get all the ranches of the loogged user
    
    }, [] )

    useEffect(() => {
        let intervalId;
    
        if (status === 200 && timeLeft > 0) {
          intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
          }, 1000); // Update time every second (1000 milliseconds)
        }
    
        return () => {
          clearInterval(intervalId);
        };
      }, [status, timeLeft]);
    
      useEffect(() => {
        if (status === 200 && timeLeft === 0) {
          window.location.reload();
        }
      }, [status, timeLeft]);

    return (

        <div className="px-3 md:px-10" style={{margin: "0"}}>

            {
                ( status === 200 ) // 200 == ok
                    ? <><Spacer y={1.5}/><SuccesMessage message={`Wait! Loading Information in ${timeLeft} Seconds`}/></>
                    : ''
            }

            <Formik
                initialValues={{
                    name: '',
                    breed: '',
                    weight: '',
                    idRanch: '',
                    files: [],
                }}

                validationSchema={ validationSchemeUploadCow }

                onSubmit={ ( values ) => {
                    const f = new FormData();

                    f.append("name", values.name)
                    f.append("breed", values.breed)
                    f.append("weight", values.weight)
                    f.append("idRanch", values.idRanch)
                    for (let index = 0; index < archivos.length; index++) {
                        f.append("imageArray", archivos[index]);
                    }
                    // for (const pair of f.entries()) {
                    //     console.log(`${pair[0]}, ${pair[1]}`);
                    //   }
                    dispatch( uploadCow( f, values.idRanch ) )
                } }
            >
                
                {/* form props from Formik */}
                { ({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (

                    <form className="w-full flex flex-col sm:items-center" onSubmit={ handleSubmit }>

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

                        <div className="flex w-full">

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
                                    className="w-full rounded-xl border-2 border-[#005100] text-[#005100] font-semibold h-10 pl-5 pr-10 bg-[#FFFFFF] focus:outline-none appearance-none"
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
                        
                        <input
                            className="w-full rounded-xl border-2 border-[#005100] cursor-pointer text-[#005100] font-semibold p-2 bg-[#FFFFFF] focus:outline-none appearance-none
                            file:rounded-md file:border-0 file:text-sm file:font-semibold
                            file:bg-[#005100] file:text-white
                            hover:file:bg-[#7CB93E]"
                            type="file"
                            name="files"
                            onChange={ (e) => subirArchivos(e.target.files) }
                            multiple
                        />

                        <Spacer y={1.5}/>

                        {
                        ( !isLoading )
                        ? <Button 
                            type="submit" 
                            aria-label="send-form"
                            bordered
                            fullWidth
                            disabled={ isLoading }
                            css={{ color: "#F5F5F7", bg: "#005100" }}
                            >Upload Cow</Button>
                        : <Loading type="points"/>
                        }

                        <Spacer y={1.5}/>

                    </form> 

                ) }


            </Formik>

        </div>

    )
}
