import * as yup from 'yup'

export const validationSchemeUploadCow = yup.object().shape({
    name: yup.string()
        .required(),
    breed: yup.string()
        .required(),
    weight: yup.number()
        .required()
        .min( 0 ),
    idRanch: yup.string()
        .required()
})