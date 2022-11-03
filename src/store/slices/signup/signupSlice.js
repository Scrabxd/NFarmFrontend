import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        status: '', //check the status of the operation, 200 if it is an ok
        errorMessage: '',
        isLoading: false
    },
    reducers: {
        startLoadingSignup: ( state ) => {
            state.isLoading = true
        },
        setRegisterStatus: ( state, action ) => {
            state.status = action.payload.status
            state.isLoading = false
        },
        setRegisterErrorMesage: ( state, action ) => {
            state.errorMessage = action.payload.errorMessage
            state.isLoading = false
        }
    }
});


// Action creators are generated for each case reducer function
export const { setRegisterStatus, setRegisterErrorMesage, startLoadingSignup } = signupSlice.actions;