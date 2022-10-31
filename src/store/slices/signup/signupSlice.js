import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        status: '', //check the status of the operation, 200 if it is an ok
        errorMessage: '',
    },
    reducers: {
        setRegisterStatus: ( state, action ) => {
            state.status = action.payload.status
        },
        setRegisterErrorMesage: ( state, action ) => {
            state.errorMessage = action.payload.errorMessage
        }
    }
});


// Action creators are generated for each case reducer function
export const { setRegisterStatus, setRegisterErrorMesage } = signupSlice.actions;