import * as yup from 'yup'

export const validationSchemeUploadRestaurant = yup.object().shape({
    branchName: yup.string()
        .required(),
    street: yup.string()
        .required(),
    country: yup.string()
        .required(),
    city: yup.string()
        .required(),
    postalCode: yup.number()
        .required()
        .min(0),
    phoneNumber: yup.number()
        .required(),
})