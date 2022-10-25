import * as yup from 'yup'

const nameRegex = '/^[a-zA-ZÀ-ÿ\s]{1,40}$/' // regular expression

export const validationScheme = yup.object().shape({
    name: yup.string()
        .matches( nameRegex, 'The name can only contain letters and spaces' )
        .required( 'Please type a name' )
})