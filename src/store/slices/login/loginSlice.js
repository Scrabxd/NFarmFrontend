import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        status: '', //check the status of the operation, 200 if it is an ok
        errorMessage: '',
        isLoading: false
    },
    reducers: {
        startLoadingLogin: ( state ) => {
            state.isLoading = true
        },
        setLoginStatus: ( state, action ) => {
            state.status = action.payload.status
            state.isLoading = false
        },
        setLoginErrorMesage: ( state, action ) => {
            state.errorMessage = action.payload.errorMessage
            state.isLoading = false
        },
    }
});

// Action creators are generated for each case reducer function
export const { setLoginStatus, setLoginErrorMesage, startLoadingLogin } = loginSlice.actions;