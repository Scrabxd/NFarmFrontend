
// just accept letters and spaces
export const justLettersAndSpacesRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/

//'Password should contain at least one number and one special character and 8-16 characters longer
export const passwordValidationRegex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/