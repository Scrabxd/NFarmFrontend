import * as yup from 'yup'
import { passwordValidationRegex } from './regularExpressions'

export const validationSchemeLogin = yup.object().shape({
    email: yup.string()
        .required()
        .email(),
    password: yup.string()
        .required()
        .matches( passwordValidationRegex, 'Password should contain at least one number and one special character and 8-16 characters longer' )
})