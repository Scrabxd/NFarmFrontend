import { createSlice } from '@reduxjs/toolkit';

export const cowFormSlice = createSlice({
    name: 'cowForm',
    initialState: {
        isLoading: false,
        status: ''
    },
    reducers: {
        startLoadingUploadCow: ( state ) => {
            state.isLoading = true
        },
        setUploadCowStatus: ( state, action ) => {
            state.status = action.payload.status
            state.isLoading = false
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingUploadCow, setUploadCowStatus } = cowFormSlice.actions;