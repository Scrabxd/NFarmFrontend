import { createSlice } from '@reduxjs/toolkit';

export const cowFormImageSlice = createSlice({
    name: 'cowFormImage',
    initialState: {
        isLoading: false,
        status: ''
    },
    reducers: {
        startLoadingUploadImage: ( state ) => {
            state.isLoading = true
        },
        setUploadImageStatus: ( state, actions ) => {
            state.status = actions.payload.status
            state.isLoading = false
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingUploadImage, setUploadImageStatus } = cowFormImageSlice.actions;