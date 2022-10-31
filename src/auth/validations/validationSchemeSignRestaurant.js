import * as yup from 'yup'
import { justLettersAndSpacesRegex, passwordValidationRegex } from './regularExpressions'

export const validationSchemeSignRestaurant = yup.object().shape({
    name: yup.string()
        .required()
        .matches( justLettersAndSpacesRegex, 'The name can only contain letters and spaces' ),
    lastName: yup.string()
        .required( )
        .matches( justLettersAndSpacesRegex, 'The lastname can only contain letters and spaces' ),
    restaurantName: yup.string()
        .required(),
    rfc: yup.string()
        .required()
        .min(12)
        .max(13),
    email: yup.string()
        .required()
        .email(),
    password: yup.string()
        .required()
        .matches( passwordValidationRegex, 'Password should contain at least one number and one special character and 8-16 characters longer' )
})