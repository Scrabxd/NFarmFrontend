import { useState } from "react"

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm )


    const onInputChangeValues = ({ target }) => {
        
        const { name, value } = target

        //keep all the state as it is and only change the value of the corresponding input
        // use the name of the input
        setFormState({
            ...formState,
            [ name ]: value
        })

    }


    return {
        ...formState, //destructuring the state, so that when we call the hook we can get { email, password } without using formState.email
        formState, // return the complete state
        onInputChangeValues
    }


}