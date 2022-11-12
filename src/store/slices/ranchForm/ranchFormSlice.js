import { createSlice } from '@reduxjs/toolkit';

export const ranchFormSlice = createSlice({
    name: 'ranchForm',
    initialState: {
        isLoading: false,
        status: ''
    },
    reducers: {
        startLoadingUploadRanch: ( state ) => {
            state.isLoading = true
        },
        setUploadRanchStatus: (state, action ) => {
            state.status = action.payload.status
            state.isLoading = false
        },
    }
});

// Action creators are generated for each case reducer function
export const { setUploadRanchStatus, startLoadingUploadRanch } = ranchFormSlice.actions;