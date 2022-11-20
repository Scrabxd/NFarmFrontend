import * as yup from 'yup'

export const validationSchemeUploadRestaurant = yup.object().shape({
    branchName: yup.string()
        .required("you must enter a branch name"),
    street: yup.string()
        .required("you must enter a address"),
    outsideNumber: yup.number()
        .required("you must enter a number"),
    country: yup.string()
        .required("you must enter a country"),
    city: yup.string()
        .required("you must enter a city"),
    postalCode: yup.number()
        .required("you must enter a zip code")
        .min(0),
    phoneNumber: yup.number()
        .required("you must enter a phone number")
        .positive( "A phone number can't start with a minus" )
        .test( 'len', 'A phone number must have 10 digits', val => val.toString().length === 10 ),
})