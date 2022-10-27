import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        status: '', //resp to check the status of the operation, 200 if it is an ok
    },
    reducers: {
        setRegisterResp: ( state, action ) => {
            state.status = action.payload.resp 
        },
    }
});


// Action creators are generated for each case reducer function
export const { setRegisterResp } = signupSlice.actions;