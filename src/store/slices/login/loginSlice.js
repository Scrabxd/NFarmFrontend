import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        state: '', //check the status of the operation, 200 if it is an ok
    },
    reducers: {
        setLoginStatus: (state, action ) => {
            state.status = action.payload.status
        },
    }
});

// Action creators are generated for each case reducer function
export const { setLoginStatus } = loginSlice.actions;