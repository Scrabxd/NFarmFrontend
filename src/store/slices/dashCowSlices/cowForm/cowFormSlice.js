import { createSlice } from '@reduxjs/toolkit';

export const cowFormSlice = createSlice({
    name: 'cowForm',
    initialState: {
        isLoading: false,
        status: '',
        lastCowId: '',
    },
    reducers: {
        startLoadingUploadCow: ( state ) => {
            state.isLoading = true
        },
        setUploadCowStatus: ( state, action ) => {
            state.status = action.payload.status
            state.isLoading = false
        },
        setLastCow: ( state, action ) => {
            // put the last cow in order to upload the image of the corresponding cow
            state.lastCowId = action.payload.id
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingUploadCow, setUploadCowStatus, setLastCow } = cowFormSlice.actions;