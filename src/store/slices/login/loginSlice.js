import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        status: '', //check the status of the operation, 200 if it is an ok
        errorMessage: '',
    },
    reducers: {
        setLoginStatus: ( state, action ) => {
            state.status = action.payload.status
        },
        setLoginErrorMesage: ( state, action ) => {
            state.errorMessage = action.payload.errorMessage
        },
    }
});

// Action creators are generated for each case reducer function
export const { setLoginStatus, setLoginErrorMesage, setUserInfor } = loginSlice.actions;