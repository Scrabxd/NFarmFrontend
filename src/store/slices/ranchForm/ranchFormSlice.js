import { createSlice } from '@reduxjs/toolkit';

export const ranchFormSlice = createSlice({
    name: 'ranchForm',
    initialState: {
        status: ''
    },
    reducers: {
        setUploadRanchStatus: (state, action ) => {
            state.status = action.payload.status
        },
    }
});

// Action creators are generated for each case reducer function
export const { setUploadRanchStatus } = ranchFormSlice.actions;